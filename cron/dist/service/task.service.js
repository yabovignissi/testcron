"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let TaskService = class TaskService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createTask(data) {
        try {
            const createdTask = await this.prisma.task.create({ data });
            console.log('Created task:', createdTask);
            return createdTask;
        }
        catch (error) {
            console.error('Failed to create task:', error);
            throw new common_1.HttpException('Failed to create task', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAllTasks() {
        const tasks = await this.prisma.task.findMany();
        return tasks;
    }
    async runTaskManually(taskId) {
        try {
            const task = await this.prisma.task.findUnique({ where: { id: taskId } });
            if (!task) {
                throw new common_1.HttpException(`Task with id ${taskId} not found.`, common_1.HttpStatus.NOT_FOUND);
            }
            console.log(`Executing task manually: ${task.title}`);
            const updatedTask = await this.prisma.task.update({
                where: { id: taskId },
                data: { lastExecutedAt: new Date(), isExecute: true },
            });
            return { id: updatedTask.id, title: updatedTask.title, lastExecutedAt: updatedTask.lastExecutedAt };
        }
        catch (error) {
            console.error('Failed to execute task:', error);
            throw new common_1.HttpException('Failed to execute task', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async checkTaskExecutionStatus(taskId) {
        try {
            const task = await this.prisma.task.findUnique({ where: { id: taskId } });
            if (!task) {
                throw new common_1.HttpException(`Task with id ${taskId} not found.`, common_1.HttpStatus.NOT_FOUND);
            }
            return { id: task.id, title: task.title, isExecute: task.isExecute || false };
        }
        catch (error) {
            console.error('Failed to check task execution status:', error);
            throw new common_1.HttpException('Failed to check task execution status', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], TaskService);
//# sourceMappingURL=task.service.js.map