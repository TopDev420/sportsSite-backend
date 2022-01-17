import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CollectionsService } from './collections.service';
import { CreateCollectionDTO } from '../dto/create-collection.dto';
import { Collection } from '../entities/collection.entity';

@Controller('collections')
export class CollectionsController {
  constructor(private collectionsService: CollectionsService) {}

  @Post('create')
  public async createCollection(
    @Body() createCollectionDTO: CreateCollectionDTO,
  ): Promise<Collection> {
    const collection = await this.collectionsService.createCollection(
      createCollectionDTO,
    );
    return collection;
  }

  @Get('all')
  public async getCategories(): Promise<Collection[]> {
    const collections = await this.collectionsService.getCollections();
    return collections;
  }

  @Get('/:collectionId')
  public async getCollection(@Param('collectionId') collectionId: number) {
    const collection = await this.collectionsService.getCollection(
      collectionId,
    );
    return collection;
  }

  @Patch('/edit/:collectionId')
  public async editProduct(
    @Body() createCollectionDTO: CreateCollectionDTO,
    @Param('collectionId') collectionId: number,
  ): Promise<Collection> {
    const collection = await this.collectionsService.editCollection(
      collectionId,
      createCollectionDTO,
    );
    return collection;
  }

  @Delete('/delete/:collectionId')
  public async deleteCollection(@Param('collectionId') collectionId: number) {
    const deleteCollection = await this.collectionsService.deleteCollection(
      collectionId,
    );
    return deleteCollection;
  }
}
