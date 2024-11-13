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
  const port = process.env.PORT || configService.get<number>('PORT') || 3001;
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.enableCors({
    origin: [
      'https://getir-livid.vercel.app', 
      'http://localhost:3000'
    ],
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
  });

  app.use(cookieParser());
  await app.listen(port);

  console.log(`🚀 Server is running on ${port}`);
}

bootstrap();
