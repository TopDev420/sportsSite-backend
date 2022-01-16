import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategorytDTO } from '../dto/create-category.dto';
import { Category } from '../entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('create')
  public async createCategory(
    @Body() createCategorytDTO: CreateCategorytDTO,
  ): Promise<Category> {
    const category = await this.categoriesService.createCategory(
      createCategorytDTO,
    );
    return category;
  }

  @Get('all')
  public async getCategories(): Promise<Category[]> {
    const categories = await this.categoriesService.getCategories();
    return categories;
  }

  @Get('/:categoryId')
  public async getCategory(@Param('categoryId') categoryId: number) {
    const category = await this.categoriesService.getCategory(categoryId);
    return category;
  }

  @Patch('/edit/:categoryId')
  public async editProduct(
    @Body() createCategorytDTO: CreateCategorytDTO,
    @Param('categoryId') categoryId: number,
  ): Promise<Category> {
    const category = await this.categoriesService.editCategory(
      categoryId,
      createCategorytDTO,
    );
    return category;
  }

  @Delete('/delete/:categoryId')
  public async deleteCategory(@Param('categoryId') categoryId: number) {
    const deleteCategory = await this.categoriesService.deleteCategory(
      categoryId,
    );
    return deleteCategory;
  }
}
