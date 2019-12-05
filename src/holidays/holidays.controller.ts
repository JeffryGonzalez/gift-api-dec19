import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { HolidaysService } from './holidays.service';
import { HolidayCreate } from './models/holidays';

@Controller('holidays')
export class HolidaysController {
    constructor(private service: HolidaysService) {

    }

    @Get()
    getAllHolidays() {
        return {
            holidays: this.service.getAll(),
        };
    }

    @Post()
    addHoliday(@Body() holiday: HolidayCreate) {
        if (holiday.name.toLowerCase() === 'sweetest day') {
            throw new BadRequestException('Made up Holiday!');
        }
        return this.service.add(holiday);
    }
}
