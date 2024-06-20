// task.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaClient, Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaClient) {}

  async createTask(data: Task): Promise<Task> {
    try {
      const createdTask = await this.prisma.task.create({ data });
      console.log('Created task:', createdTask);
      return createdTask;
    } catch (error) {
      console.error('Failed to create task:', error);
      throw new HttpException('Failed to create task', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAllTasks(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async runTaskManually(taskId: number): Promise<{ id: number, title: string, lastExecutedAt: Date | null }> {
    try {
      const task = await this.prisma.task.findUnique({ where: { id: taskId } });

      if (!task) {
        throw new HttpException(`Task with id ${taskId} not found.`, HttpStatus.NOT_FOUND);
      }

      console.log(`Executing task manually: ${task.title}`);
      const updatedTask = await this.prisma.task.update({
        where: { id: taskId },
        data: { lastExecutedAt: new Date(), isExecute: true },
      });

      return { id: updatedTask.id, title: updatedTask.title, lastExecutedAt: updatedTask.lastExecutedAt };
    } catch (error) {
      console.error('Failed to execute task:', error);
      throw new HttpException('Failed to execute task', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async checkTaskExecutionStatus(taskId: number): Promise< { id: number, title: string, isExecute: boolean }> {
    try {
 
      const task = await this.prisma.task.findUnique({ where: { id: taskId } });

      if (!task) {
        throw new HttpException(`Task with id ${taskId} not found.`, HttpStatus.NOT_FOUND);
      }
      return { id: task.id, title: task.title, isExecute: task.isExecute || false };
    } catch (error) {
      console.error('Failed to check task execution status:', error);
      throw new HttpException('Failed to check task execution status', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}

