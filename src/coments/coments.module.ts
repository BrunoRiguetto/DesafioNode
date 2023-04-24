import { ComentsRepository } from './coments.repository';
import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { ComentsService } from './coments.service';
import { ComentsController } from './coments.controller';

@Module({
  controllers: [ComentsController],
  providers: [ComentsService, PrismaService, ComentsRepository]
})
export class ComentsModule {}
