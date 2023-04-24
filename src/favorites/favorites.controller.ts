import { UserEntity } from './../users/entities/user.entity';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('Favorites')
@ApiBearerAuth()
@Controller('v1/favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@CurrentUser() user: UserEntity, @Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(user.id, createFavoriteDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findAll() {
    return this.favoritesService.findAll();
  }

  @Get('/:music_letter_id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findOne(@CurrentUser() user: UserEntity, @Param('music_letter_id') music_letter_id: string) {
    return this.favoritesService.findOne(user.id, +music_letter_id);
  }

  @Delete('/:music_letter_id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  remove(@CurrentUser() user: UserEntity, @Param('music_letter_id') music_letter_id: string) {
    return this.favoritesService.remove(user.id, +music_letter_id);
  }
}
