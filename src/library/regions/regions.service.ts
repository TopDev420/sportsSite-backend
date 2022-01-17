import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Region } from '../entities/region.entity';
import { CreateRegionDTO } from '../dto/create-region.dto';
import { RegionRepository } from './region.repository';

@Injectable()
export class RegionsService {
  constructor(
    @InjectRepository(RegionRepository)
    private regionRepository: RegionRepository,
  ) {}

  public async createRegion(createRegionDTO: CreateRegionDTO): Promise<Region> {
    return await this.regionRepository.createRegion(createRegionDTO);
  }

  public async getRegions(): Promise<Region[]> {
    return await this.regionRepository.find();
  }

  public async getRegion(regionId: number): Promise<Region> {
    const foundRegion = await this.regionRepository.findOne(regionId);
    if (!foundRegion) throw new NotFoundException('Region noe found');
    return foundRegion;
  }

  public async editRegion(
    regionId: number,
    createRegionDTO: CreateRegionDTO,
  ): Promise<Region> {
    const editedRegion = await this.regionRepository.findOne(regionId);
    if (!editedRegion) throw new NotFoundException('Region not found');
    return this.regionRepository.editRegion(createRegionDTO, editedRegion);
  }

  public async deleteRegion(regionId: number): Promise<void> {
    await this.regionRepository.delete(regionId);
  }
}
