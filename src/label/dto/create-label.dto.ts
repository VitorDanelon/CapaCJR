import { IsOptional, IsString } from "class-validator";

export class createLabelDto {
    @IsString()
    nome: string;

    @IsString()
    @IsOptional()
    text: string;

}