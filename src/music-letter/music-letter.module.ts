import { MusicLetterRepository } from './music-letter.repository';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { MusicLetterService } from './music-letter.service';
import { MusicLetterController } from './music-letter.controller';

@Module({
  controllers: [MusicLetterController],
  providers: [MusicLetterService, PrismaService, MusicLetterRepository]
})
export class MusicLetterModule {}
