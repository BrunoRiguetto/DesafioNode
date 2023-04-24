import { IsNumber, IsString } from "class-validator";

export class CreateComentDto {

    @IsString()
    coment: string;

    @IsNumber()
    music_letter_id: number;
}
