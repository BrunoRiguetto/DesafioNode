import { IsNumber } from "class-validator";

export class CreateFavoriteDto {
    @IsNumber()
    music_letter_id: number;
}
