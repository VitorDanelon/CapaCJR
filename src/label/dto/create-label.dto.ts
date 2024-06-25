import { IsBoolean, IsOptional, IsString } from "class-validator";

export class createLabelDto {
    @IsString()
    nome: string;

    @IsBoolean()
    is_active: Boolean;

    @IsString()
    @IsOptional()
    text: string;

}