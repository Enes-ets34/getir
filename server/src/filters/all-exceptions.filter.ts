import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Error as MongooseError } from 'mongoose'

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let messages: string[] = [];

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseBody = exception.getResponse();
      if (typeof responseBody === 'string') {
        messages.push(responseBody);
      } else if (typeof responseBody === 'object' && responseBody !== null) {
        if (Array.isArray((responseBody as any).message)) {
          messages.push(...(responseBody as any).message);
        } else {
          messages.push((responseBody as any).message || 'Unknown error');
        }
      }
    } else if (exception instanceof Error) {
      if (exception instanceof MongooseError) {
        if (exception.name === 'ValidationError') {
          messages.push(
            ...Object.values((exception as any).errors).map(
              (err: any) => err.message,
            ),
          );
        }
      } else if (exception.message.includes('E11000')) {
        status = HttpStatus.BAD_REQUEST;
        messages.push('Bu kullanıcı zaten mevcut');
      }
    }
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      messages, // Dizi olarak mesajları gönderiyoruz
    });
  }
}
