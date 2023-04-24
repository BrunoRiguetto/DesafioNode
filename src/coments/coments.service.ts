import { ComentsRepository } from './coments.repository';
import { Injectable } from '@nestjs/common';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';

@Injectable()
export class ComentsService {

    constructor(private readonly repository: ComentsRepository){}

  create(id: number, createComentDto: CreateComentDto) {
    return this.repository.create(id, createComentDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  update(id: number, updateComentDto: UpdateComentDto) {
    return this.repository.update(id, updateComentDto)
  }

  remove(id: number) {
    return this.repository.delete(id);
  }
}
