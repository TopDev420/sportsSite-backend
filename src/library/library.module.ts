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

import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemRepository } from './items/item.repository';

import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { UserRepository } from './users/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CategoryRepository,
      TeamRepository,
      EventRepository,
      CollectionRepository,
      ItemRepository,
      UserRepository,
    ]),
  ],
  providers: [
    CategoriesService,
    TeamsService,
    EventsService,
    CollectionsService,
    ItemsService,
    UsersService,
  ],
  controllers: [
    CategoriesController,
    TeamsController,
    EventsController,
    CollectionsController,
    ItemsController,
    UsersController,
  ],
})
export class LibraryModule {}
