import { PartialType } from '@nestjs/swagger';
import { CreateMusicLetterDto } from './create-music-letter.dto';

export class UpdateMusicLetterDto extends PartialType(CreateMusicLetterDto) {
    name: string;
    songwriter: string;
    music_letter: string;
    video_link: string;
    genre_id: number;
    artist_id: number;
}
