import { UserRepository } from './users.repository';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(private readonly repository: UserRepository){}

  async create(createUserDto: CreateUserDto) {
    const data = {
        ...createUserDto,
        password: await bcrypt.hash(createUserDto.password, 10),
      };

      const createdUser = await this.repository.create( data );

      return {
        ...createdUser,
        password: undefined,
      };
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return this.repository.findOne(id);
  }

  findByEmail(email: string) {
    return this.repository.findByEmail(email);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const data = {
        ...updateUserDto,
        password: await bcrypt.hash(updateUserDto.password, 10),
      };

      return this.repository.update( id,  data);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
