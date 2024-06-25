import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { createLabelDto } from './dto/create-label.dto';
import { UpdateLabelDto } from './dto/update-label.dto';
import { LabelService } from './label.service';

@Controller('label')
export class LabelController {
    constructor(private readonly labelService: LabelService) {}

    @Post('create')
    async create(@Body() dtoCreateLabel: createLabelDto) {
        return await this.labelService.create(dtoCreateLabel);
    }

    @Get()
    async findLabels() {
        return await this.labelService.findLabels();
    }

    @Get(":id") 
    async findLabel(@Param("id", ParseIntPipe) id: number) {
        return this.labelService.findLabel(+id);
    }

    @Patch(":id")
    updateLabelText(
        @Param("id", ParseIntPipe) id: number,
        @Body() dtoUpdateLabel: UpdateLabelDto
    ) {
       return this.labelService.updateLabelText(id, dtoUpdateLabel); 
        }  
        
    @Delete(":id")
    deleteLabel(@Param("id", ParseIntPipe) id: number) {
        return this.labelService.deleteLabel(id);
    }


    
}