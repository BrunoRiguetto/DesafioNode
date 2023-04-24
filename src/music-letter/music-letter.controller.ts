import { UserEntity } from './../users/entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { MusicLetterService } from './music-letter.service';
import { CreateMusicLetterDto } from './dto/create-music-letter.dto';
import { UpdateMusicLetterDto } from './dto/update-music-letter.dto';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@ApiTags('MusicLetter')
@ApiBearerAuth()
@Controller('v1/music-letter')
export class MusicLetterController {
  constructor(private readonly musicLetterService: MusicLetterService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@CurrentUser() user: UserEntity, @Body() createMusicLetterDto: CreateMusicLetterDto) {
    return this.musicLetterService.create(user.id, createMusicLetterDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findAll() {
    return this.musicLetterService.findAll();
  }

  @Get('/paged')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findAllPaged(@Query('page') page: number) {
    return this.musicLetterService.findAllPaged(page);
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findOne(@Param('id') id: string) {
    return this.musicLetterService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  update(@Param('id') id: string, @Body() updateMusicLetterDto: UpdateMusicLetterDto) {
    return this.musicLetterService.update(+id, updateMusicLetterDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  remove(@Param('id') id: string) {
    return this.musicLetterService.remove(+id);
  }
}
