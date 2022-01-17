import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';
import { CategoryRepository } from './categories/category.repository';

import { RegionsService } from './regions/regions.service';
import { RegionsController } from './regions/regions.controller';
import { RegionRepository } from './regions/region.repository';

import { TeamsService } from './teams/teams.service';
import { TeamsController } from './teams/teams.controller';
import { TeamRepository } from './teams/team.repository';

import { EventsController } from './events/events.controller';
import { EventsService } from './events/events.service';
import { EventRepository } from './events/event.repository';

import { CollectionsService } from './collections/collections.service';
import { CollectionsController } from './collections/collections.controller';
import { CollectionRepository } from './collections/collection.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryRepository,
      TeamRepository,
      EventRepository,
      CollectionRepository,
    ]),
  ],
  providers: [
    CategoriesService,
    TeamsService,
    EventsService,
    CollectionsService,
  ],
  controllers: [
    CategoriesController,
    TeamsController,
    EventsController,
    CollectionsController,
  ],
})
export class LibraryModule {}
