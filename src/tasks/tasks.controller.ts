import { ParseIntPipe } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common/decorators";
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskService } from "./tasks.service";

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Post('create')
  create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @Get()
  findAll() {
    return this.tasksService.findTasks();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.findTask(id);
  }

  @Get('tag/:tag_id')
  findByTag(@Param('tag_id', ParseIntPipe) tag_id: number){
    return this.tasksService.findLabelTasks(tag_id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateTaskDto: UpdateTaskDto
  ) {
    return this.tasksService.updateTask(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.deleteTask(id);
  }

}