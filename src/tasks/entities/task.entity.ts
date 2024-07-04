import { Task } from "@prisma/client";

export class TaskEntity implements Task {
    id: number;
    nome: string;
    descricao: string;
    is_active: boolean;
    created: Date;
    updated: Date;
    labelId: number;
}
