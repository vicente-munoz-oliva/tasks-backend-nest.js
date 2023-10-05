import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthRegisterDto } from './dto/auth-register.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post("sign-in")
  create(@Body() createAuthDto: AuthLoginDto) {
    return this.authService.signIn(createAuthDto);
  }

  @Post("sign-up")
  register(@Body() authRegisterDto: AuthRegisterDto) {
    return this.authService.signUp(authRegisterDto);
  }


}
