import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ScreensModule } from './screens/screens.module';
import { BlocksModule } from './blocks/blocks.module';
import { ActionsModule } from './actions/actions.module';

@Module({
  imports: [ConfigModule.forRoot(), ScreensModule, BlocksModule, ActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
