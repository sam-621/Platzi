import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove properties that are not in the DTO but dont show any warning
      forbidNonWhitelisted: true, // instead of stripping non-whitelisted properties validator will throw an exception.
    }),
  );
  await app.listen(3000);
}
bootstrap();
