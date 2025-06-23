import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  getAll() {
    return this.usersService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(
    @Request() req,
    @Body()
    body: {
      username: string;
      password: string;
      role_id: number;
      city: string;
      department_Id: number;
    },
  ) {
    return await this.usersService.createUser(body, req.user.role_id);
  }
  @Post('/find')
  async find(@Body() body: { userName: string }) {
    return await this.usersService.getUser(body);
  }
}
