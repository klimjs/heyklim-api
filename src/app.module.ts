import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ScreensModule } from './screens/screens.module';

@Module({
  imports: [ConfigModule.forRoot(), ScreensModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
