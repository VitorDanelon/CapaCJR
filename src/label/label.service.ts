import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';

@Injectable()
export class LabelService {
    constructor(private prisma : PrismaService) {}


    async create(dtoCreateLabel: createLabelDto) {
        return await this.prisma.lABEL.create({
            data: dtoCreateLabel
        });
    }

    async findLabels() {
        return await this.prisma.lABEL.findMany();
    }

    async findLabel(id: number) {
        return await this.prisma.lABEL.findUnique({
            where: {
                id,
            }
        });
    }

    async updateLabelText(id: number, dtoUpdateLabel: UpdateLabelDto) {
        return await this.prisma.lABEL.update({
            where: {
                id,
            },
            data: dtoUpdateLabel,
        });
    }

    async deleteLabel(id: number) {
        return this.prisma.lABEL.delete({
            where: {
                id,
            },
        });
    }


    
}