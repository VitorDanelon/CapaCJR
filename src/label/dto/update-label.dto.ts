import { PartialType } from "@nestjs/mapped-types";
import { IsBoolean, IsOptional } from "class-validator";
import { createLabelDto } from "./create-label.dto";

export class UpdateLabelDto extends PartialType(createLabelDto) {
    @IsOptional()
    @IsBoolean()
    is_active?: boolean;

}