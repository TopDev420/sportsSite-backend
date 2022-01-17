import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegionsService } from './regions.service';
import { CreateRegionDTO } from '../dto/create-region.dto';
import { Region } from '../entities/region.entity';

@Controller('regions')
export class RegionsController {
  constructor(private regionsService: RegionsService) {}

  @Post('create')
  public async createRegion(
    @Body() createRegionDTO: CreateRegionDTO,
  ): Promise<Region> {
    const region = await this.regionsService.createRegion(createRegionDTO);
    return region;
  }

  @Get('all')
  public async getCategories(): Promise<Region[]> {
    const regions = await this.regionsService.getRegions();
    return regions;
  }

  @Get('/:regionId')
  public async getRegion(@Param('regionId') regionId: number) {
    const region = await this.regionsService.getRegion(regionId);
    return region;
  }

  @Patch('/edit/:regionId')
  public async editProduct(
    @Body() createRegionDTO: CreateRegionDTO,
    @Param('regionId') regionId: number,
  ): Promise<Region> {
    const region = await this.regionsService.editRegion(
      regionId,
      createRegionDTO,
    );
    return region;
  }

  @Delete('/delete/:regionId')
  public async deleteRegion(@Param('regionId') regionId: number) {
    const deleteRegion = await this.regionsService.deleteRegion(regionId);
    return deleteRegion;
  }
}
