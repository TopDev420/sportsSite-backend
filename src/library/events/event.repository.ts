import { Repository, EntityRepository } from 'typeorm';
import { Event } from '../entities/event.entity';
import { CreateEventDTO } from '../dto/create-event.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  public async createEvent(createEventtDTO: CreateEventDTO): Promise<Event> {
    const { name, categoryId, regionId, homeTeamId, awayTeamId, duration } =
      createEventtDTO;

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
    createEventtDTO: CreateEventDTO,
    editedEvent: Event,
  ): Promise<Event> {
    const { name, categoryId, regionId, homeTeamId, awayTeamId, duration } =
      createEventtDTO;

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
