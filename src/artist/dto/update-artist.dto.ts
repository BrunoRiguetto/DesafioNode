import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateArtistDto } from './create-artist.dto';

export class UpdateArtistDto extends PartialType(CreateArtistDto) {
    @ApiProperty({description: 'Artists name'})
    name: string;
}
