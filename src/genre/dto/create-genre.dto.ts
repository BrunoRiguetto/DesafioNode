import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateGenreDto {
    @ApiProperty({description: 'Genre name'})
    @IsString()
    @IsNotEmpty()
    genre: string;
}
