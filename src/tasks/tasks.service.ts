import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
    constructor(private prisma : PrismaService) {}

    // CRUD Task

    // CREATE 
    async create(dtoCreateTask: CreateTaskDto) {
        return await this.prisma.task.create({
            data: dtoCreateTask 
        });
    }

    // READ ALL 
    async findTasks() {
        return await this.prisma.task.findMany();
    }

    // READ ONE 
    async findTask(id: number) {
        return await this.prisma.task.findUnique({
            where: {
                id,
            }
        });
    }


    // READ Tasks from label
    async findLabelTasks(idLabel: number) {
        return this.prisma.task.findMany({
            where: {
                labelId: idLabel,
            },
        });
    }

    // UPDATE
    async updateTask(id: number, dtoUpdateTask: UpdateTaskDto) {
        await this.prisma.task.update({
            where: {
                id,
            },
            data: dtoUpdateTask
        });

        return "Task atualizada com sucesso";
    }

    // DELETE 
    async deleteTask(id: number) {
        await this.prisma.task.delete({
            where: {
                id,
            }
        });

        return "Task deletada com sucesso"
    }

    // DELETE
    async deleteTaskConcluded() {
        await this.prisma.task.deleteMany({
            where: {
                is_active: false
            }
        });

        return "As Tasks concluidas foram excluidas com sucesso"

    }


} 