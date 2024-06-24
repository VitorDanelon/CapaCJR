import { Task } from "@prisma/client";

export class TaskEntity implements Task {
    created: Date;
    labelId: number;
    id: number
    nome: string
    descricao: string
    is_active: boolean

}
