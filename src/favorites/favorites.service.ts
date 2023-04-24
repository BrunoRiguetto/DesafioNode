import { FavoritesRepository } from './favorites.repository';
import { Injectable } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Injectable()
export class FavoritesService {
    constructor(private readonly repository: FavoritesRepository){}

  create(id: number, createFavoriteDto: CreateFavoriteDto) {
    return this.repository.create(id, createFavoriteDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number, music_letter_id: number) {
    return this.repository.findOne(id, music_letter_id);
  }

  remove(id: number, music_letter_id: number) {
    return this.repository.delete(id, music_letter_id);
  }
}
