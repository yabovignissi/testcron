// app.module.ts

import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { TaskController } from '../Controllers/task.controller';
import { TaskService } from '../service/task.service'; 

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [
    TaskService,
    {
      provide: PrismaClient,
      useClass: PrismaClient,
    },
  ],
})
export class TaskModule {}
