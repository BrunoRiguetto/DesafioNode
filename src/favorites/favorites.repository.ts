import { FavoriteEntity } from './entities/favorite.entity';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class FavoritesRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(id: number, createFavoriteDto: CreateFavoriteDto): Promise<FavoriteEntity> {
        return this.prisma.favorites.create({
            data: {
                ... createFavoriteDto,
                users_id: id,
            }
        })
    }

    async findAll(): Promise<FavoriteEntity[]> {
        return this.prisma.favorites.findMany({
            include: {
                users: {
                    select: {
                        name: true
                    }
                },
                music_letter: {
                    select: {
                        name: true
                    }
                }
            }
        });
    }

    async findOne(id: number, music_letter_id: number): Promise<FavoriteEntity> {
        return this.prisma.favorites.findUnique({
            where: {
                users_id_music_letter_id: {
                    users_id: id,
                    music_letter_id: music_letter_id
                },
            },
            include: {
                users: {
                    select: {
                        name: true
                    }
                },
                music_letter: {
                    select: {
                        name: true
                    }
                }
            }
        })
    }

    async delete(id: number, music_letter_id: number): Promise<FavoriteEntity> {
        return this.prisma.favorites.delete({
            where: {
                users_id_music_letter_id: {
                    users_id: id,
                    music_letter_id: music_letter_id
                },
            },
        })
    }
}