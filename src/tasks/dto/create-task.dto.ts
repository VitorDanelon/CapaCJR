import { IsString } from "class-validator";

export class CreateTaskDto {
    @IsString()
    nome: string;
    @IsString()
    @IsOptional()
    descricao: string;

}
