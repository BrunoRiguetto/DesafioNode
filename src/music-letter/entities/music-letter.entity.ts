import { music_letter } from "@prisma/client";

export class MusicLetterEntity implements music_letter{
     id: number;
     name: string;
     songwriter: string;
     music_letter: string;
     video_link: string;
     users_id: number;
     genre_id: number;
     artist_id: number;
}
