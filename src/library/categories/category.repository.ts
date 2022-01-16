import { Repository, EntityRepository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategorytDTO } from '../dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  public async createCategory(
    createCategorytDto: CreateCategorytDTO,
  ): Promise<Category> {
    const { name, parentId, metadata } = createCategorytDto;

    const category = new Category();
    category.name = name;
    category.parentId = parentId;
    category.metadata = metadata;

    await category.save();
    return category;
  }

  public async editCategory(
    createCategorytDto: CreateCategorytDTO,
    editedCategory: Category,
  ): Promise<Category> {
    const { name, parentId, metadata } = createCategorytDto;

    editedCategory.name = name;
    editedCategory.parentId = parentId;
    editedCategory.metadata = metadata;
    await editedCategory.save();

    return editedCategory;
  }
}
