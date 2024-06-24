import { Module } from '@nestjs/common';
import { LabelModule } from './label/label.module';
import { PrismaModule } from './prisma/prisma.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [TasksModule, LabelModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
