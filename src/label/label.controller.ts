import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { createLabelDto } from './dto/create-label.dto';
import { updateLabelDto } from './dto/update-label.dto';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    @Post()
    async create(@Body() dtoCreateLabel: createLabelDto) {
        return await this.labelService.create(dtoCreateLabel);
    }

    @Get()
    async findLabels() {
        return await this.labelService.findLabels();
    }

    @Get(":id") 
    async findLabel(@Param("id") id: string) {
        return await this.labelService.findLabel(+id);
    }

    @Patch(":id")
    async updateLabelText(@Param("id") id: string, @Body() dtoUpdateLabel: updateLabelDto) {
        try {
            return await this.labelService.updateLabelText(+id, dtoUpdateLabel);
        } catch(error) {
            return error;
        }  
    }
    @Delete(":id")
    async deleteLabel(@Param("id") id: string) {
        try {
            return await this.labelService.deleteLabel(+id);
        } catch(error) {
            return error; 
        }
    }


    
}