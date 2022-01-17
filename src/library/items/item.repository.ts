import { Repository, EntityRepository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { CreateItemDTO } from '../dto/create-item.dto';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {
  public async createItem(createItemDTO: CreateItemDTO): Promise<Item> {
    const { name, eventId, creator, royalties } = createItemDTO;

    const item = new Item();
    item.name = name;
    item.eventId = eventId;
    item.creator = creator;
    item.royalties = royalties;

    await item.save();
    return item;
  }

  public async editItem(
    createItemDTO: CreateItemDTO,
    editedItem: Item,
  ): Promise<Item> {
    const { name, eventId, creator, royalties } = createItemDTO;

    editedItem.name = name;
    editedItem.eventId = eventId;
    editedItem.creator = creator;
    editedItem.royalties = royalties;
    await editedItem.save();

    return editedItem;
  }
}
