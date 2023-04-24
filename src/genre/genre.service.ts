import { GenreRepository } from './genre.repository';
import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { NotFoundError } from '../common/errors/types/NotFoundError';
import { GenreEntity } from './entities/genre.entity';

@Injectable()
export class GenreService {

    constructor(private readonly repository: GenreRepository) { }

    create(createGenreDto: CreateGenreDto) {
        return this.repository.create(createGenreDto);
    }

    findAll() {
        return this.repository.findAll();
    }

    async findOne(id: number): Promise<GenreEntity> {
        const genre = await this.repository.findOne(id);

        if (!genre){
            throw new NotFoundError('Genre not found');
        }
        return genre;
    }

    update(id: number, updateArtistDto: UpdateGenreDto) {
        return this.repository.update(id, updateArtistDto);
    }

    remove(id: number) {
        return this.repository.remove(id);
    }
}
