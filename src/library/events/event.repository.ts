import { Repository, EntityRepository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDTO } from '../dto/create-event.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  public async createEvent(createEventDTO: CreateEventDTO): Promise<Event> {
    const { name, categoryId, regionId, homeTeamId, awayTeamId, duration } =
      createEventDTO;

    const event = new Event();
    event.name = name;
    event.categoryId = categoryId;
    event.regionId = regionId;
    event.homeTeamId = homeTeamId;
    event.awayTeamId = awayTeamId;
    event.duration = duration;

    await event.save();
    return event;
  }

  public async editEvent(
    createEventDTO: CreateEventDTO,
    editedEvent: Event,
  ): Promise<Event> {
    const { name, categoryId, regionId, homeTeamId, awayTeamId, duration } =
      createEventDTO;

    editedEvent.name = name;
    editedEvent.categoryId = categoryId;
    editedEvent.regionId = regionId;
    editedEvent.homeTeamId = homeTeamId;
    editedEvent.awayTeamId = awayTeamId;
    editedEvent.duration = duration;
    await editedEvent.save();

    return editedEvent;
  }
}
