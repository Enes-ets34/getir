import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import connectDatabase from 'helpers/database/connectDatabase.helper';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await connectDatabase();

  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') ?? 3000;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: '*',
    credentials: true,
  });
  app.use(cookieParser());
  await app.listen(port);

  console.log(`🚀 Server is running on ${port}`);
}

bootstrap();
