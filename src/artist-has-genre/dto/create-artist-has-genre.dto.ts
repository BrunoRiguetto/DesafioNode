import { IsNumber } from "class-validator";

export class CreateArtistHasGenreDto {
    @IsNumber()
    artist_id: number;
    @IsNumber()
    genre_id: number;
}
