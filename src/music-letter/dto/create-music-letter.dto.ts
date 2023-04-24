import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMusicLetterDto {
    @ApiProperty({description: 'Music letter name'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: 'Music letter songwriter'})
    @IsString()
    songwriter: string;

    @ApiProperty({description: 'Music letter'})
    @IsString()
    music_letter: string;

    @ApiProperty({description: 'Music letter video_link'})
    @IsString()
    video_link: string;

    @ApiProperty({description: 'Music letter genre'})
    @IsNumber()
    @IsNotEmpty()
    genre_id: number;

    @ApiProperty({description: 'Music letter artist'})
    @IsNumber()
    @IsNotEmpty()
    artist_id: number;
}
