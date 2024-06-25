import { LABEL } from "@prisma/client";

export class LabelEntity implements LABEL {
    id: number;
    text: string;
    created: Date;
    nome: string
    descricao: string
    is_active: boolean
    
}