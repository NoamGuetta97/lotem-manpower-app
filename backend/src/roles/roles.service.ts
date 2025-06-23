import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
@Injectable()
export class RolesService {
    constructor (private prisma: PrismaService){}
    async createRole(data: {id: number, roleName: string})
    {
        return await this.prisma.roles.create({data});
    }

    async getRoles()
    {
        return await this.prisma.roles.findMany();
    }
}
