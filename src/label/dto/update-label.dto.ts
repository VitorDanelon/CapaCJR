import { PartialType, PickType } from "@nestjs/mapped-types";
import { LabelEntity } from "src/entities/label.entity";

export class updateLabelDto extends PartialType(
    PickType(
        LabelEntity, [
            "text"
        ]
)){}