import { ArtistEntity } from './entities/artist.entity';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArtistService } from './artist.service';
import { CreateArtistDto } from './dto/create-artist.dto';
import { UpdateArtistDto } from './dto/update-artist.dto';

@ApiTags('Artists')
@ApiBearerAuth()
@Controller('v1/artist')
export class ArtistController {
    constructor(private readonly artistService: ArtistService) { }

    @Post()
    @ApiResponse({status: 201, description: 'Created'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    create(@Body() createArtistDto: CreateArtistDto) {
        return this.artistService.create(createArtistDto);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    findAll() {
        return this.artistService.findAll();
    }

    @Get('/paged')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    findAllPaged(@Query('page') page: number): Promise<ArtistEntity[]> {
        return this.artistService.findAllPaged(page);
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    findOne(@Param('id') id: string) {
        return this.artistService.findOne(+id);
    }

    @Patch(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 409, description: 'Conflict'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    update(@Param('id') id: string, @Body() updateArtistDto: UpdateArtistDto) {
        return this.artistService.update(+id, updateArtistDto);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Ok'})
    @ApiResponse({status: 400, description: 'Bad Request'})
    @ApiResponse({status: 401, description: 'Unauthorized'})
    @ApiResponse({status: 500, description: 'Internal Server Error'})
    remove(@Param('id') id: string) {
        return this.artistService.remove(+id);
    }
}
