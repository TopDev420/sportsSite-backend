import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Category } from '../entities/category.entity';
import { CreateCategorytDTO } from '../dto/create-category.dto';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository)
    private categoryRepository: CategoryRepository,
  ) {}

  public async createCategory(
    createCategoryDTO: CreateCategorytDTO,
  ): Promise<Category> {
    return await this.categoryRepository.createCategory(createCategoryDTO);
  }

  public async getCategories(): Promise<Category[]> {
    return await this.categoryRepository.find();
  }

  public async getCategory(categoryId: number): Promise<Category> {
    const foundCategory = await this.categoryRepository.findOne(categoryId);
    if (!foundCategory) {
      throw new NotFoundException('Category not found');
    }
    return foundCategory;
  }

  public async editCategory(
    categoryId: number,
    createCategoryDTO: CreateCategorytDTO,
  ): Promise<Category> {
    const editedCategory = await this.categoryRepository.findOne(categoryId);
    if (!editedCategory) {
      throw new NotFoundException('Category not found');
    }
    return this.categoryRepository.editCategory(
      createCategoryDTO,
      editedCategory,
    );
  }

  public async deleteCategory(categoryId: number): Promise<void> {
    await this.categoryRepository.delete(categoryId);
  }
}
