import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDTO } from '../dto/create-item.dto';
import { Item } from '../entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private itemsService: ItemsService) {}

  @Post('create')
  public async createItem(@Body() createItemDTO: CreateItemDTO): Promise<Item> {
    const item = await this.itemsService.createItem(createItemDTO);
    return item;
  }

  @Get('all')
  public async getCategories(): Promise<Item[]> {
    const items = await this.itemsService.getItems();
    return items;
  }

  @Get('/:itemId')
  public async getItem(@Param('itemId') itemId: number) {
    const item = await this.itemsService.getItem(itemId);
    return item;
  }

  @Patch('/edit/:itemId')
  public async editProduct(
    @Body() createItemDTO: CreateItemDTO,
    @Param('itemId') itemId: number,
  ): Promise<Item> {
    const item = await this.itemsService.editItem(itemId, createItemDTO);
    return item;
  }

  @Delete('/delete/:itemId')
  public async deleteItem(@Param('itemId') itemId: number) {
    const deleteItem = await this.itemsService.deleteItem(itemId);
    return deleteItem;
  }
}
