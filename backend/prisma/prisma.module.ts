import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Optional, makes it available globally without needing to import in every module
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}