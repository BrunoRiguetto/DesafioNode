import { ArtistRepository } from './artist.repository';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ArtistService } from './artist.service';
import { ArtistController } from './artist.controller';

@Module({
  controllers: [ArtistController],
  providers: [ArtistService, PrismaService, ArtistRepository]
})
export class ArtistModule {}
