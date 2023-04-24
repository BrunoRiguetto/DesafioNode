import { artist_has_genre } from "@prisma/client";

export class ArtistHasGenreEntity implements artist_has_genre{
    artist_id: number;
    genre_id: number;
}
