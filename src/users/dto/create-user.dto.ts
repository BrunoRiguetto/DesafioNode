import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({description: 'User name'})
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({description: 'User CPF'})
    @IsString()
    @IsNotEmpty()
    cpf: string;

    @ApiProperty({description: 'User email'})
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({description: 'User password'})
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}
