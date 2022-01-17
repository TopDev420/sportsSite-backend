import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Collection } from '../entities/collection.entity';
import { CreateCollectionDTO } from '../dto/create-collection.dto';
import { CollectionRepository } from './collection.repository';

@Injectable()
export class CollectionsService {
  constructor(
    @InjectRepository(CollectionRepository)
    private collectionRepository: CollectionRepository,
  ) {}

  public async createCollection(
    createCollectionDTO: CreateCollectionDTO,
  ): Promise<Collection> {
    return await this.collectionRepository.createCollection(
      createCollectionDTO,
    );
  }

  public async getCollections(): Promise<Collection[]> {
    return await this.collectionRepository.find();
  }

  public async getCollection(collectionId: number): Promise<Collection> {
    const foundCollection = await this.collectionRepository.findOne(
      collectionId,
    );
    if (!foundCollection) throw new NotFoundException('Collection noe found');
    return foundCollection;
  }

  public async editCollection(
    collectionId: number,
    createCollectionDTO: CreateCollectionDTO,
  ): Promise<Collection> {
    const editedCollection = await this.collectionRepository.findOne(
      collectionId,
    );
    if (!editedCollection) throw new NotFoundException('Collection not found');
    return this.collectionRepository.editCollection(
      createCollectionDTO,
      editedCollection,
    );
  }

  public async deleteCollection(collectionId: number): Promise<void> {
    await this.collectionRepository.delete(collectionId);
  }
}
