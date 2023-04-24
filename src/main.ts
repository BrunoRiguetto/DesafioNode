import { UnauthorizedInterceptor } from './common/errors/interceptors/unauthorized.interceptor';
import { DatabaseInterceptor } from './common/errors/interceptors/database.interceptor';
import { ConflictInterceptor } from './common/errors/interceptors/conflict.interceptor';
import { NotFoundInterceptor } from './common/errors/interceptors/notfound.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Lirics')
        .setDescription('Rock lyrics page')
        .setVersion('1.0')
        .setContact('Bruno Riguetto', 'https://www.linkedin.com/in/bruno-riguetto-82b65956/', 'bruno.riguetto@gft.com')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }),
    );
    app.useGlobalInterceptors(new ConflictInterceptor());
    app.useGlobalInterceptors(new DatabaseInterceptor());
    app.useGlobalInterceptors(new UnauthorizedInterceptor());
    app.useGlobalInterceptors(new NotFoundInterceptor());

    app.enableCors({
        origin: ['http://localhost:4200'],
        methods: ['GET', 'POST', 'PATCH', 'DELETE'],
        credentials: true,
      });

    await app.listen(process.env.PORT || 3000);
}
bootstrap();
