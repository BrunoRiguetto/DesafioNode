import { favorites } from "@prisma/client";

export class FavoriteEntity implements favorites{
    users_id: number;
    music_letter_id: number;
}
