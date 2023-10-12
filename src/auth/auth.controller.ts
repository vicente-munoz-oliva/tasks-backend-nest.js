import { Controller, Post, Body, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { Response } from 'express';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("sign-in")
  async create(@Body() createAuthDto: AuthLoginDto, @Res({ passthrough: true }) response: Response) {

    const { token } = await this.authService.signIn(createAuthDto)

    response.cookie('key', token)

    return { message: 'Ok' }
  }

  @Post("sign-up")
  register(@Body() authRegisterDto: AuthRegisterDto) {
    return this.authService.signUp(authRegisterDto);
  }


}
