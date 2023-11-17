import { Module } from '@nestjs/common';
import { ScreensController } from './screens.controller';
import { ScreensService } from './screens.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [ScreensController],
  providers: [PrismaService, ScreensService],
})
export class ScreensModule {}
