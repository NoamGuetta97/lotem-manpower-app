import { Controller, Post, Get, Body } from '@nestjs/common';
import { RoleType } from './roles.module';
import { RolesService } from './roles.service';
@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}
  @Post('/createRole/')
  async createRole(@Body() body: { id: number; roleName: string }) {
    return await this.rolesService.createRole(body);
  }

  @Get('/roles')
  async getRoles() {
    return await this.rolesService.getRoles();
  }
}
