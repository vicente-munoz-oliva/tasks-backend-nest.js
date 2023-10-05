import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';

@UseGuards(AuthGuard)
@Controller('users')
export class UserController {

  constructor(private readonly userService: UserService) { }

  @Get()
  findOne(@Req() request: Request) {
    const id: number = request['user'].userId;
    return this.userService.findOne(+id);
  }

  @Patch()
  update(@Req() request: Request, @Body() updateUserDto: UpdateUserDto) {
    const id: number = request['user'].userId;
    return this.userService.update(+id, updateUserDto);
  }


  remove(@Req() request: Request) {
    const id: number = request['user'].userId;
    return this.userService.remove(+id);
  }

}
