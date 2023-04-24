import { ArtistHasGenreRepository } from './artist-has-genre.repository';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ArtistHasGenreService } from './artist-has-genre.service';
import { ArtistHasGenreController } from './artist-has-genre.controller';

@Module({
  controllers: [ArtistHasGenreController],
  providers: [ArtistHasGenreService, PrismaService, ArtistHasGenreRepository]
})
export class ArtistHasGenreModule {}
