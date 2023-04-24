import { Controller, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArtistHasGenreService } from './artist-has-genre.service';
import { CreateArtistHasGenreDto } from './dto/create-artist-has-genre.dto';

@ApiTags('ArtistHasGenre')
@ApiBearerAuth()
@Controller('v1/artist-has-genre')
export class ArtistHasGenreController {
  constructor(private readonly artistHasGenreService: ArtistHasGenreService) {}

  @Post()
  @ApiResponse({status: 201, description: 'Created'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 409, description: 'Conflict'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  create(@Body() createArtistHasGenreDto: CreateArtistHasGenreDto) {
    return this.artistHasGenreService.create(createArtistHasGenreDto);
  }

  @Delete(':artist_id/:genre_id')
  @ApiResponse({status: 200, description: 'Ok'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  @ApiResponse({status: 401, description: 'Unauthorized'})
  @ApiResponse({status: 500, description: 'Internal Server Error'})
  remove(@Param('artist_id') artist_id: string, @Param('genre_id') genre_id: string) {
    return this.artistHasGenreService.remove(+artist_id, +genre_id);
  }
}
