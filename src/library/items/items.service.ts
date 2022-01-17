import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Item } from '../entities/item.entity';
import { CreateItemDTO } from '../dto/create-item.dto';
import { ItemRepository } from './item.repository';

@Injectable()
export class ItemsService {
  constructor(
    @InjectRepository(ItemRepository)
    private itemRepository: ItemRepository,
  ) {}

  public async createItem(createItemDTO: CreateItemDTO): Promise<Item> {
    return await this.itemRepository.createItem(createItemDTO);
  }

  public async getItems(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  public async getItem(itemId: number): Promise<Item> {
    const foundItem = await this.itemRepository.findOne(itemId);
    if (!foundItem) throw new NotFoundException('Item noe found');
    return foundItem;
  }

  public async editItem(
    itemId: number,
    createItemDTO: CreateItemDTO,
  ): Promise<Item> {
    const editedItem = await this.itemRepository.findOne(itemId);
    if (!editedItem) throw new NotFoundException('Item not found');
    return this.itemRepository.editItem(createItemDTO, editedItem);
  }

  public async deleteItem(itemId: number): Promise<void> {
    await this.itemRepository.delete(itemId);
  }
}
