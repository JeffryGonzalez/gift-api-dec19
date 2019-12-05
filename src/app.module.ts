import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HolidaysController } from './holidays/holidays.controller';
import { HolidaysService } from './holidays/holidays.service';
import { RecipientsController } from './recipients/recipients.controller';
import { RecipientsService } from './recipients/recipients.service';
import { DatabaseService } from './database/database.service';

@Module({
  imports: [],
  controllers: [AppController, HolidaysController, RecipientsController],
  providers: [AppService, HolidaysService, RecipientsService, DatabaseService],
})
export class AppModule {}
