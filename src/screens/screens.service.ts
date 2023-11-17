import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Screen } from '@prisma/client';

@Injectable()
export class ScreensService {
  constructor(private prisma: PrismaService) {}

  async screens(): Promise<Screen[]> {
    return this.prisma.screen.findMany({ orderBy: { id: 'asc' } });
  }
}
