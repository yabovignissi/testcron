import { NestFactory } from '@nestjs/core';
import { TaskModule } from './module/task.module';

async function bootstrap() {
  const app = await NestFactory.create(TaskModule);
  await app.listen(3000);
}
bootstrap();
