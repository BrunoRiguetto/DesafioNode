import { UpdateArtistDto } from './dto/update-artist.dto';
import { CreateArtistDto } from './dto/create-artist.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";
import { ArtistEntity } from './entities/artist.entity';

@Injectable()
export class ArtistRepository {
    constructor(private readonly prisma:PrismaService){}

     async create(createArtistDto: CreateArtistDto): Promise<ArtistEntity> {
        return this.prisma.artist.create({
            data: createArtistDto
        });
      }

      async findAll(): Promise<ArtistEntity[]> {
        return this.prisma.artist.findMany();
      }

      async findAllPaged(page: number): Promise<ArtistEntity[]> {
        return this.prisma.artist.findMany({
            take: 10,
            skip: 10 * page,
            orderBy: {
                name: 'asc',
            },
        });
      }

      async findOne(id: number): Promise<ArtistEntity> {
        return this.prisma.artist.findUnique({
            where: {
                id,
            },
            include: {
                music_letter: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });
      }

      async update(id: number, updateArtistDto: UpdateArtistDto): Promise<ArtistEntity> {
        return this.prisma.artist.update({
            where:{
              id,
            },
            data: updateArtistDto,
        });
      }

      async remove(id: number): Promise<ArtistEntity> {
        return this.prisma.artist.delete({
            where: {
                id,
            }
        });
      }
}