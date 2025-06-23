import { Controller, Get, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { UsersService } from 'src/users/users.service';
@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}
  @Post()
  async login(@Body() data: { username: string; password: string }) {
    return this.loginService.login(data.username, data.password);
  }
}
