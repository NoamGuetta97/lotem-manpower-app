import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() body: { email: string; password: string }) {
    return await this.usersService.createUser(body);
  }
  @Post("/find")
  find(@Body() body: {email: string}){
    return this.usersService.getUser(body);
  }
}