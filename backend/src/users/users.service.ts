import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
    //here
  findAll() {
    return this.prisma.user.findMany();
  }

  async createUser(data: { email: string; password: string }) {
    try
    {
        const user = await this.prisma.user.create({ data });
        return user;
    }
  catch(error)
  {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
        
        if (error.code === 'P2002') {
          // Handle unique constraint violation
          console.error('Unique constraint violation:', error.message);
          return "Email is already used";
        } else {
          // Handle other PrismaClientKnownRequestError codes
          console.error('Prisma Client Known Request Error:', error.message);
          throw new Error('An error occurred while creating the user.');
        }
  }
}
  }


  getUser(data: {email: string;})
  {
    const {email} = data;
    return this.prisma.user.findUnique({where: {email}, });
  }
}