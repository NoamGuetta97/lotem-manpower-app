import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { LoginModule } from './login/login.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [PrismaModule, UsersModule, LoginModule, RolesModule],
})
export class AppModule {}