"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const task_module_1 = require("./module/task.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(task_module_1.TaskModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map