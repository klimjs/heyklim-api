import { Controller, Get } from '@nestjs/common';
import { ScreensService } from './screens.service';

@Controller('screens')
export class ScreensController {
  constructor(private screensService: ScreensService) {}

  @Get()
  findAll() {
    return this.screensService.screens();
  }
}
