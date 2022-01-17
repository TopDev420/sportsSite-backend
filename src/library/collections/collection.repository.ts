import { Repository, EntityRepository } from 'typeorm';
import { Collection } from '../entities/collection.entity';
import { CreateCollectionDTO } from '../dto/create-collection.dto';

@EntityRepository(Collection)
export class CollectionRepository extends Repository<Collection> {
  public async createCollection(
    createCollectionDTO: CreateCollectionDTO,
  ): Promise<Collection> {
    const { name } = createCollectionDTO;

    const collection = new Collection();
    collection.name = name;

    await collection.save();
    return collection;
  }

  public async editCollection(
    createCollectionDTO: CreateCollectionDTO,
    editedCollection: Collection,
  ): Promise<Collection> {
    const { name } = createCollectionDTO;

    editedCollection.name = name;
    await editedCollection.save();

    return editedCollection;
  }
}
