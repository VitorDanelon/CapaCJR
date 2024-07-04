import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateTaskDto } from './create-task.dto';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    @IsOptional()
    nome?: string;
    @IsOptional()
    descricao?: string;
    @IsOptional()
    is_active?: boolean;
    @IsOptional()
    labelId?: number;
}
