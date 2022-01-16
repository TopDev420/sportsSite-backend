import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriesService } from './categories/categories.service';
import { CategoriesController } from './categories/categories.controller';

import { CategoryRepository } from './categories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoriesService],
  controllers: [CategoriesController],
})
export class LibraryModule {}
