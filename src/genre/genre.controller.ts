import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@ApiTags('Genres')
@ApiBearerAuth()
@Controller('v1/genre')
export class GenreController {
    constructor(private readonly genreService: GenreService) { }

    @Post()
    @ApiResponse({status: 201, description: 'Created'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    create(@Body() createArtistDto: CreateGenreDto) {
        return this.genreService.create(createArtistDto);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    findAll() {
        return this.genreService.findAll();
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    findOne(@Param('id') id: string) {
        return this.genreService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDto) {
        return this.genreService.update(+id, updateGenreDto);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    remove(@Param('id') id: string) {
        return this.genreService.remove(+id);
    }
}
