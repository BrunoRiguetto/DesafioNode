import { NotFoundError } from './../common/errors/types/NotFoundError';
import { MusicLetterRepository } from './music-letter.repository';
import { Injectable } from '@nestjs/common';
import { CreateMusicLetterDto } from './dto/create-music-letter.dto';
import { UpdateMusicLetterDto } from './dto/update-music-letter.dto';
import { MusicLetterEntity } from './entities/music-letter.entity';

@Injectable()
export class MusicLetterService {

    constructor(private readonly repository: MusicLetterRepository){}

  async create(id: number, createMusicLetterDto: CreateMusicLetterDto): Promise<MusicLetterEntity> {
    return this.repository.create(id, createMusicLetterDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findAllPaged(page: number) {
    return this.repository.findAllPaged(page);
  }

  async findOne(id: number) {
    const music_letter = await this.repository.findOne(id);

    if (!music_letter){
        throw new NotFoundError('Music letter not found');
    }
    return music_letter;
  }

  update(id: number, updateMusicLetterDto: UpdateMusicLetterDto) {
    return this.repository.update(id, updateMusicLetterDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
