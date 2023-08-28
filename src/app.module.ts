import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [UserModule, AuthModule, ConfigModule.forRoot({isGlobal: true})],
  controllers: [AppController],
  providers: [AppService, 
  {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
  PrismaService
],
})
export class AppModule {}
