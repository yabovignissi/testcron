import { PrismaClient, Task } from '@prisma/client';
export declare class TaskService {
    private readonly prisma;
    constructor(prisma: PrismaClient);
    createTask(data: Task): Promise<Task>;
    findAllTasks(): Promise<Task[]>;
    runTaskManually(taskId: number): Promise<{
        id: number;
        title: string;
        lastExecutedAt: Date | null;
    }>;
    checkTaskExecutionStatus(taskId: number): Promise<{
        id: number;
        title: string;
        isExecute: boolean;
    }>;
}
