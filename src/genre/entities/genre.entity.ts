import { genre } from "@prisma/client";

export class GenreEntity implements genre{
    id: number;
    genre: string;
}
