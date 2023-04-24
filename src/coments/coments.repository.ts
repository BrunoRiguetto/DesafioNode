import { UpdateComentDto } from './dto/update-coment.dto';
import { CreateComentDto } from './dto/create-coment.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import { ComentEntity } from './entities/coment.entity';

@Injectable()
export class ComentsRepository{

    constructor(private readonly prisma: PrismaService){}

    async create(id: number, createComentDto: CreateComentDto): Promise<ComentEntity> {
        return this.prisma.coments.create({
            data: {
                ... createComentDto,
                users_id: id,
            }
        });
    }

    async findAll(): Promise<ComentEntity[]> {
        return this.prisma.coments.findMany({
            include: {
                users: {
                    select: {
                        name: true,
                    }
                },
                music_letter: {
                    select: {
                        name: true,
                    }
                }
            }
        });
    }

    async findOne(id: number): Promise <ComentEntity> {
        return this.prisma.coments.findUnique({
            where: {
                id
            },
            include: {
                users: {
                    select: {
                        name: true,
                    }
                },
                music_letter: {
                    select: {
                        name: true,
                    }
                }
            }
        })
    }

    async update(id: number, updateComentDto: UpdateComentDto) {
        return this.prisma.coments.update({
            where: {
                id
            },
            data: updateComentDto,
        })
    }

    async delete(id: number) {
        return this.prisma.coments.delete({
            where: {
                id
            }
        })
    }
}