import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '../prisma/prisma.module';
import { LoginModule } from './login/login.module';
@Module({
  imports: [PrismaModule, UsersModule, LoginModule],
})
export class AppModule {}