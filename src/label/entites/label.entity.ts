import { LABEL } from "@prisma/client";

export class LabelEntity implements LABEL {
    id: number;
    nome: string;
    is_active: boolean;
    created: Date;
    updated: Date;
    text: string;
}