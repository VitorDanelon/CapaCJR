import { PartialType } from "@nestjs/mapped-types";
import { createLabelDto } from "./create-label.dto";

export class UpdateLabelDto extends PartialType(createLabelDto) {}