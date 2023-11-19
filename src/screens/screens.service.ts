import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma, Screen } from '@prisma/client';

@Injectable()
export class ScreensService {
  constructor(private prisma: PrismaService) {}

  async screens(): Promise<Screen[]> {
    return this.prisma.screen.findMany({ orderBy: { id: 'asc' } });
  }

  async create(data: Prisma.ScreenCreateInput): Promise<Screen> {
    return this.prisma.screen.create({ data });
  }

  async delete(where: Prisma.ScreenWhereUniqueInput): Promise<Screen> {
    return this.prisma.screen.delete({ where });
  }
}
