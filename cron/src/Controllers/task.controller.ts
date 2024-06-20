// task.controller.ts
import { Controller, Post, Body, Get, Param, ParseIntPipe, HttpException, HttpStatus } from '@nestjs/common';
import { TaskService } from '../service/task.service';
import { Task } from '@prisma/client';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('create')
  async createTask(@Body() taskData: Task): Promise<Task> {
    return this.taskService.createTask(taskData);
  }

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.findAllTasks();
  }

  @Post('/run/:id')
  async runTaskManually(@Param('id', ParseIntPipe) id: number): Promise<{ id: number, title: string, lastExecutedAt: Date| null }> {
    try {
      const taskInfo = await this.taskService.runTaskManually(id);
      return taskInfo;
    } catch (error) {
      console.error('Failed to run task manually:', error);
      throw new HttpException('Failed to run task manually', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get('/status/:id')
  async checkTaskExecutionStatus(@Param('id', ParseIntPipe) id: number): Promise<{ id: number, title: string, executed: boolean }> {
    try {
      const taskStatus = await this.taskService.checkTaskExecutionStatus(id);
      return { id: taskStatus.id, title: taskStatus.title, executed: taskStatus.isExecute };
    } catch (error) {
      console.error('Failed to check task execution status:', error);
      throw new HttpException('Failed to check task execution status', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
