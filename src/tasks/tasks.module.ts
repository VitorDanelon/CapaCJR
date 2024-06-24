import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TasksController } from './tasks.controller';
import { TaskService } from './tasks.service';

@Module({
  controllers: [TasksController],
  providers: [TaskService, PrismaService],
})
export class TasksModule {}
