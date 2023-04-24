import { ArtistHasGenreRepository } from './artist-has-genre.repository';
import { Injectable } from '@nestjs/common';
import { CreateArtistHasGenreDto } from './dto/create-artist-has-genre.dto';

@Injectable()
export class ArtistHasGenreService {
    constructor (private readonly repository: ArtistHasGenreRepository) {}

  create(createArtistHasGenreDto: CreateArtistHasGenreDto) {
    return this.repository.create(createArtistHasGenreDto);
  }

  remove(artist_id: number, genre_id: number) {
    return this.repository.delete(artist_id, genre_id);
  }
}
