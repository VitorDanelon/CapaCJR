import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LabelController } from './label.controller';
import { LabelService } from './label.service';

@Module({
  controllers: [LabelController],
  providers: [LabelService, PrismaService]
})
export class LabelModule {}