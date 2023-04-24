import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateArtistDto {
    @ApiProperty({description: 'Artists name'})
    @IsString()
    @IsNotEmpty()
    name: string;
}
