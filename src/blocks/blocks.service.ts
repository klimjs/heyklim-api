import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Block } from '@prisma/client';

@Injectable()
export class BlocksService {
  constructor(private prisma: PrismaService) {}

  async blocks(): Promise<Block[]> {
    return this.prisma.block.findMany();
  }
}
