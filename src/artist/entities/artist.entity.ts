import { artist } from "@prisma/client";

export class ArtistEntity implements artist{
    id: number;
    name: string;
}
