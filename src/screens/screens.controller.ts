import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ScreensService } from './screens.service';
import { Screen } from '@prisma/client';

@Controller('screens')
export class ScreensController {
  constructor(private screensService: ScreensService) {}

  @Get()
  findAll(): Promise<Screen[]> {
    return this.screensService.screens();
  }

  @Post()
  create(@Body() data: {}): Promise<Screen> {
    return this.screensService.create(data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Screen> {
    return this.screensService.delete({ id: Number(id) });
  }
}
