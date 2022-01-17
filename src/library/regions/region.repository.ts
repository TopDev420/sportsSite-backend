import { Repository, EntityRepository } from 'typeorm';
import { Region } from '../entities/region.entity';
import { CreateRegionDTO } from '../dto/create-region.dto';

@EntityRepository(Region)
export class RegionRepository extends Repository<Region> {
  public async createRegion(createRegionDTO: CreateRegionDTO): Promise<Region> {
    const { name, metadata } = createRegionDTO;

    const region = new Region();
    region.name = name;
    region.metadata = metadata;

    await region.save();
    return region;
  }

  public async editRegion(
    createRegionDTO: CreateRegionDTO,
    editedRegion: Region,
  ): Promise<Region> {
    const { name, metadata } = createRegionDTO;

    editedRegion.name = name;
    editedRegion.metadata = metadata;
    await editedRegion.save();

    return editedRegion;
  }
}
