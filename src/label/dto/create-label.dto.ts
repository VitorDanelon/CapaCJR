import { PickType } from "@nestjs/mapped-types";
import { LabelEntity } from "src/entities/label.entity";

export class createLabelDto extends PickType(
    LabelEntity, ["text"]
){}