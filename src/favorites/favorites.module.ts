import { FavoritesRepository } from './favorites.repository';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesController } from './favorites.controller';

@Module({
  controllers: [FavoritesController],
  providers: [FavoritesService, PrismaService, FavoritesRepository]
})
export class FavoritesModule {}
