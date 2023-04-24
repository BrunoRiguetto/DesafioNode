import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ArtistModule } from './artist/artist.module';
import { GenreModule } from './genre/genre.module';
import { UsersModule } from './users/users.module';
import { MusicLetterModule } from './music-letter/music-letter.module';
import { ComentsModule } from './coments/coments.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ArtistHasGenreModule } from './artist-has-genre/artist-has-genre.module';

@Module({
  imports: [ArtistModule, GenreModule, UsersModule, MusicLetterModule,
    ComentsModule, FavoritesModule, ArtistHasGenreModule, AuthModule],

    providers: [
        {
          provide: APP_GUARD,
          useClass: JwtAuthGuard,
        },
      ],


})
export class AppModule {}
