import { ArtistRepository } from './artist.repository';
import { Injectable } from '@nestjs/common';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';
import { ArtistEntity } from './entities/artist.entity';
import { NotFoundError } from '../common/errors/types/NotFoundError';

@Injectable()
export class ArtistService {

    constructor(private readonly repository: ArtistRepository) { }

    create(createArtistDto: CreateArtistDto) {
        return this.repository.create(createArtistDto);
    }

    findAll() {
        return this.repository.findAll();
    }

    findAllPaged(page: number) {
        return this.repository.findAllPaged(page);
    }

    async findOne(id: number): Promise<ArtistEntity> {
        const artist = await this.repository.findOne(id);

        if (!artist){
            throw new NotFoundError('Artist not found');
        }

        return artist;
    }

    update(id: number, updateArtistDto: UpdateArtistDto) {
        return this.repository.update(id, updateArtistDto);
    }

    remove(id: number) {
        return this.repository.remove(id);
    }
}
