import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ActionsService } from './actions.service';
import { Action } from '@prisma/client';

@Controller('actions')
export class ActionsController {
  constructor(private actionsService: ActionsService) {}

  @Get('screen/:screenId')
  findByScreenId(@Param('screenId') screenId: string): Promise<Action[]> {
    return this.actionsService.actions({
      where: { screenId: Number(screenId) },
    });
  }

  @Post()
  create(@Body() data: { screenId: string; blockId: string }): Promise<Action> {
    return this.actionsService.create({
      screenId: Number(data.screenId),
      blockId: Number(data.blockId),
    });
  }

  @Patch(':id')
  updateTarget(
    @Param('id') id: string,
    @Body() data: { targetId: string },
  ): Promise<Action> {
    return this.actionsService.updateTarget({
      where: { id: Number(id) },
      data: { targetId: Number(data.targetId) },
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Action> {
    return this.actionsService.delete({ id: Number(id) });
  }
}
