import { UpdateMusicLetterDto } from './dto/update-music-letter.dto';
import { CreateMusicLetterDto } from './dto/create-music-letter.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import { MusicLetterEntity } from './entities/music-letter.entity';

@Injectable()
export class MusicLetterRepository{

    constructor(private readonly prisma: PrismaService){}

      async create(id: number, createMusicLetterDto: CreateMusicLetterDto): Promise<MusicLetterEntity> {
        return this.prisma.music_letter.create({
            data: {
                ... createMusicLetterDto,
                users_id: id,
            }
         });
      }

      async findAll(): Promise<MusicLetterEntity[]> {
        return this.prisma.music_letter.findMany({
            orderBy:{
                name: 'asc'
            },
            include: {
                users: {
                    select: {
                        name: true
                    }
                },
                artist: {
                    select: {
                        name: true
                    }
                },
                genre: {
                    select: {
                        genre: true
                    }
                }
            }
        });
      }

      async findAllPaged(page: number): Promise<MusicLetterEntity[]> {
        return this.prisma.music_letter.findMany({
            take: 10,
            skip: 10 * page,
            orderBy: {
                name: 'asc',
            },
            include: {
                users: {
                    select: {
                        name: true
                    }
                },
                artist: {
                    select: {
                        name: true
                    }
                },
                genre: {
                    select: {
                        genre: true
                    }
                }
            }
        });
      }

      async findOne(id: number): Promise<MusicLetterEntity> {
        return this.prisma.music_letter.findUnique({
            where: {
                id
            },
            include: {
                users: {
                    select: {
                        name: true
                    }
                },
                artist: {
                    select: {
                        name: true
                    }
                },
                genre: {
                    select: {
                        genre: true
                    }
                },
                coments: {
                    select: {
                        id: true,
                        coment: true,
                        users_id: true,
                        users: {
                            select: {
                                name: true,
                            }
                        }
                    }
                }
            }
        });
      }

      async update(id: number, updateMusicLetterDto: UpdateMusicLetterDto) {
        return this.prisma.music_letter.update({
            where: {
                id,
            },
                data: updateMusicLetterDto,
        });
      }

      async remove(id: number) {
        return this.prisma.music_letter.delete({
            where: {
                id
            }
        });
      }
}