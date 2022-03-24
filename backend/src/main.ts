import { NestFactory } from '@nestjs/core';
import { initalization } from './Init';
import { MainModule } from './main.module';

async function bootstrap() {
  initalization() // Important for creating folder being files stored --> Always have to be first function

  const app = await NestFactory.create(MainModule);
  await app.listen(8080);
}
bootstrap();
