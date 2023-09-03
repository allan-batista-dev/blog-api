import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { UnauthorizedErrorInterceptor } from './common/errors/interceptors/unauthorizes.interception';
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interception';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  })
  );
  app.enableCors({
    origin: 'https://allan-dev-blog.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
  })
  app.useGlobalInterceptors(new UnauthorizedErrorInterceptor);
  app.useGlobalInterceptors(new NotFoundInterceptor);
  await app.listen(3000);
}
bootstrap();
