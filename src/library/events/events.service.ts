import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Event } from '../entities/event.entity';
import { CreateEventDTO } from '../dto/create-event.dto';
import { EventRepository } from './event.repository';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  public async createEvent(createEventDTO: CreateEventDTO): Promise<Event> {
    return await this.eventRepository.createEvent(createEventDTO);
  }

  public async getEvents(): Promise<Event[]> {
    return await this.eventRepository.find();
  }

  public async getEvent(eventId: number): Promise<Event> {
    const foundEvent = await this.eventRepository.findOne(eventId);
    if (!foundEvent) throw new NotFoundException('Event noe found');
    return foundEvent;
  }

  public async editEvent(
    eventId: number,
    createEventDTO: CreateEventDTO,
  ): Promise<Event> {
    const editedEvent = await this.eventRepository.findOne(eventId);
    if (!editedEvent) throw new NotFoundException('Event not found');
    return this.eventRepository.editEvent(createEventDTO, editedEvent);
  }

  public async deleteEvent(eventId: number): Promise<void> {
    await this.eventRepository.delete(eventId);
  }
}
