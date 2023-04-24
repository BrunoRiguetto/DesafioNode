import { coments } from "@prisma/client";

export class ComentEntity implements coments{
    id: number;
    coment: string;
    users_id: number;
    music_letter_id: number;
}
