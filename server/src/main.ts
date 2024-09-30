import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import connectDatabase from 'helpers/database/connectDatabase';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectDatabase();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;
  app.useGlobalPipes(new ValidationPipe({
    transform: true, 
    whitelist: true, 
    forbidNonWhitelisted: true, 
  }));
  await app.listen(port);

  console.log(`🚀 Server is running on ${port}`);
}

bootstrap();
