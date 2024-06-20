import { TaskService } from '../service/task.service';
import { Task } from '@prisma/client';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    createTask(taskData: Task): Promise<Task>;
    getAllTasks(): Promise<Task[]>;
    runTaskManually(id: number): Promise<{
        id: number;
        title: string;
        lastExecutedAt: Date | null;
    }>;
    checkTaskExecutionStatus(id: number): Promise<{
        id: number;
        title: string;
        executed: boolean;
    }>;
}
