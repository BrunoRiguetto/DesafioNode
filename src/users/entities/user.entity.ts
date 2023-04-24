import { users } from "@prisma/client";

export class UserEntity implements users {
    id: number;
    name: string;
    cpf: string;
    email: string;
    password: string;
}
