import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { RoleType } from 'src/roles/roles.module';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  //here
  findAll() {
    return this.prisma.user.findMany({ include: { role: true } });
  }

  async createUser(
    data: {
      username: string;
      password: string;
      role_id: number;
      city: string;
      department_Id: number;
    },
    currentUserRole: number,
  ) {
    try {
      data.password = await bcrypt.hash(data.password, 10);
      if (!(data.role_id in RoleType)) {
        return 'Non existent role';
      } else if (currentUserRole <= data.role_id) {
        return "You don't have permission to create a user of this authorization level";
      }
      const user = await this.prisma.user.create({ data });
      return user;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          // Handle unique constraint violation
          console.error('Unique constraint violation:', error.message);
          return 'username is already used';
        } else {
          // Handle other PrismaClientKnownRequestError codes
          console.error('Prisma Client Known Request Error:', error.message);
          return 'error something something';
        }
      }
      return error;
    }
  }

  async getUser(data: { userName: string }): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { username: data.userName },
      include: { role: true },
    });
  }
}
