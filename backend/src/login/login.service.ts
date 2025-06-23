import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}
  async login(userName: string, password: string) {
    const user = await this.usersService.getUser({ userName });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Incorrect username or password');
    }

    const payload = { username: user.username, role_id: user.role_id };
    const token = this.jwtService.sign(payload);
    return { access_token: token, ...user };
  }
}
