import { Controller, Get, Post, Body, Put, Param, Res, HttpStatus } from '@nestjs/common';
import { RecipientsService } from './recipients.service';
import { RecipientCreate } from 'src/holidays/models/recipients';
import { Response } from 'express';
@Controller('recipients')
export class RecipientsController {

    constructor(private service: RecipientsService) { }
    @Get()
    getAll() {
        console.log('getting them');
        return {
            recipients: this.service.getAll(),
        };
    }

    @Post()
    add(@Body() recipient: RecipientCreate) {
        const response = this.service.add(recipient);
        return response;
    }

    @Put(':id/holidays')
    putHolidays(@Param('id') id: string, @Body() holidays: string[], @Res() response: Response) {
        if (this.service.addHolidays(id, holidays)) {
            console.log({ id, holidays });
            response.status(HttpStatus.NO_CONTENT).send();
        } else {
            response.status(HttpStatus.NOT_FOUND).send();
        }

    }
}
