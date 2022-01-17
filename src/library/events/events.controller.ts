import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDTO } from '../dto/create-event.dto';
import { Event } from '../entities/event.entity';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post('create')
  public async createEvent(
    @Body() createEventDTO: CreateEventDTO,
  ): Promise<Event> {
    const event = await this.eventsService.createEvent(createEventDTO);
    return event;
  }

  @Get('all')
  public async getCategories(): Promise<Event[]> {
    const events = await this.eventsService.getEvents();
    return events;
  }

  @Get('/:eventId')
  public async getEvent(@Param('eventId') eventId: number) {
    const event = await this.eventsService.getEvent(eventId);
    return event;
  }

  @Patch('/edit/:eventId')
  public async editProduct(
    @Body() createEventDTO: CreateEventDTO,
    @Param('eventId') eventId: number,
  ): Promise<Event> {
    const event = await this.eventsService.editEvent(eventId, createEventDTO);
    return event;
  }

  @Delete('/delete/:eventId')
  public async deleteEvent(@Param('eventId') eventId: number) {
    const deleteEvent = await this.eventsService.deleteEvent(eventId);
    return deleteEvent;
  }
}
