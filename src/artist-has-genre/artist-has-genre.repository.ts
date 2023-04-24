import { ArtistHasGenreEntity } from './entities/artist-has-genre.entity';
import { CreateArtistHasGenreDto } from './dto/create-artist-has-genre.dto';
import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from "@nestjs/common";

@Injectable()
export class ArtistHasGenreRepository {
    constructor (private readonly prisma: PrismaService){}

    async create(createArtistHasGenreDto: CreateArtistHasGenreDto): Promise<ArtistHasGenreEntity> {
        return this.prisma.artist_has_genre.create({
            data: createArtistHasGenreDto
        })
    }

    async delete(artist_id: number, genre_id: number): Promise<ArtistHasGenreEntity> {
        return this.prisma.artist_has_genre.delete({
            where: {
                artist_id_genre_id: {
                    artist_id: artist_id,
                    genre_id: genre_id
                }
            }
        })
    }

}