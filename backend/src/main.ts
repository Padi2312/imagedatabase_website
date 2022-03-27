import { NestFactory } from '@nestjs/core';
import { initalization } from './Init';
import { MainModule } from './main.module';

async function bootstrap() {
  initalization() // Important for creating folder being files stored --> Always have to be first function

  const app = await NestFactory.create(MainModule);
  app.enableCors({origin: process.env.CORS_ORIGIN ?? "*"})
  await app.listen(process.env.PORT ?? 8080);
}
bootstrap();
