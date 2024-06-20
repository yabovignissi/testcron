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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const task_service_1 = require("../service/task.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(taskData) {
        return this.taskService.createTask(taskData);
    }
    async getAllTasks() {
        return this.taskService.findAllTasks();
    }
    async runTaskManually(id) {
        try {
            const taskInfo = await this.taskService.runTaskManually(id);
            return taskInfo;
        }
        catch (error) {
            console.error('Failed to run task manually:', error);
            throw new common_1.HttpException('Failed to run task manually', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async checkTaskExecutionStatus(id) {
        try {
            const taskStatus = await this.taskService.checkTaskExecutionStatus(id);
            return { id: taskStatus.id, title: taskStatus.title, executed: taskStatus.isExecute };
        }
        catch (error) {
            console.error('Failed to check task execution status:', error);
            throw new common_1.HttpException('Failed to check task execution status', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Post)('/run/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "runTaskManually", null);
__decorate([
    (0, common_1.Get)('/status/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "checkTaskExecutionStatus", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('task'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map