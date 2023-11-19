import { Controller, Get } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { Block } from '@prisma/client';

@Controller('blocks')
export class BlocksController {
  constructor(private blocksService: BlocksService) {}

  @Get()
  findAll(): Promise<Block[]> {
    return this.blocksService.blocks();
  }
}
