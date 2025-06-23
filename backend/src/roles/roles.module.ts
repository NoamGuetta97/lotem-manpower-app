import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';

export enum RoleType{
  SUPERUSER = 4,
  RAMAH = 3,
  RAAN = 2,
  RAMAD = 1,
  HAPASH = 0
}
@Module({
  providers: [RolesService],
  controllers: [RolesController]
})
export class RolesModule {}

