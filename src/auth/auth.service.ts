import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  async signIn(authLoginDto: AuthLoginDto) {

    let user: CreateUserDto = await this.usersService.findByEmailWithPassword({ email: authLoginDto.email });

    if (!user)
      throw new HttpException('email is wrong', HttpStatus.UNAUTHORIZED);

    const isPasswordValid = await bcrypt.compare(authLoginDto.password, user.password);

    if (!isPasswordValid)
      throw new HttpException('password is wrong', HttpStatus.UNAUTHORIZED);

    const token = await this.jwtService.signAsync({ userId: user.userId });

    return { token };

  }

  async signUp(authRegisterDto: AuthRegisterDto) {

    let user: CreateUserDto = await this.usersService.findOneByEmail({ email: authRegisterDto.email });

    if (user)
      throw new HttpException('The email is already registered', HttpStatus.CONFLICT);

    authRegisterDto.password = await bcrypt.hash(authRegisterDto.password, 10);

    return await this.usersService.create(authRegisterDto);

  }

}
