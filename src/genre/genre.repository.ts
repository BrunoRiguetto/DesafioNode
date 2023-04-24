import { UpdateGenreDto } from './dto/update-genre.dto';
import { CreateGenreDto } from './dto/create-genre.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import { GenreEntity } from './entities/genre.entity';

@Injectable()
export class GenreRepository {
    constructor(private readonly prisma:PrismaService){}

    async create(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
        return this.prisma.genre.create({
            data: createGenreDto
        });
      }

      async findAll(): Promise<GenreEntity[]> {
        return this.prisma.genre.findMany();
      }

      async findOne(id: number): Promise<GenreEntity> {
        return this.prisma.genre.findUnique({
            where: {
                id,
            },
            include: {
                artist_has_genre: {
                    select: {
                        artist: {
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

      async update(id: number, updateGenreDto: UpdateGenreDto): Promise<GenreEntity> {
        return this.prisma.genre.update({
            where:{
              id,
            },
            data: updateGenreDto,
        });
      }

      async remove(id: number): Promise<GenreEntity> {
        return this.prisma.genre.delete({
            where: {
                id,
            }
        });
      }
}