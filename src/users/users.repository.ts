import { Injectable } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserEntity } from "./entities/user.entity";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository {
    constructor(private readonly prisma:PrismaService){}

     async create(createUserDto: CreateUserDto) {
        return await this.prisma.users.create({
            data: createUserDto,
        });
        }

      async findAll() {
        return this.prisma.users.findMany({
            orderBy:{
                name: 'asc'
            },
            select: {
                name: true,
                email: true,
            }
        });
      }

      async findOne(id: number) {
        return this.prisma.users.findUnique({
            where: {
                id,
            },
            include: {
                favorites :{
                    select: {
                        music_letter: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                }
            }
        });
      }

      async findByEmail(email: string): Promise<UserEntity> {
        return this.prisma.users.findUnique({
            where: { email },
        });
      }

      async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
        return this.prisma.users.update({
            where:{
              id,
            },
            data: updateUserDto,
        });
      }

      async remove(id: number): Promise<UserEntity> {
        return this.prisma.users.delete({
            where: {
                id,
            }
        });
      }
}