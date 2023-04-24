import { UserEntity } from './../users/entities/user.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { ComentsService } from './coments.service';
import { CreateComentDto } from './dto/create-coment.dto';
import { UpdateComentDto } from './dto/update-coment.dto';

@ApiTags('Coments')
@ApiBearerAuth()
@Controller('v1/coments')
export class ComentsController {
  constructor(private readonly comentsService: ComentsService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@CurrentUser() user: UserEntity, @Body() createComentDto: CreateComentDto) {
    return this.comentsService.create(user.id, createComentDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findAll() {
    return this.comentsService.findAll();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  findOne(@Param('id') id: string) {
    return this.comentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  update(@Param('id') id: string, @Body() updateComentDto: UpdateComentDto) {
    return this.comentsService.update(+id, updateComentDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  remove(@Param('id') id: string) {
    return this.comentsService.remove(+id);
  }
}
