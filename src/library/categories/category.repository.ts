import { Repository, EntityRepository } from 'typeorm';
import { Category } from '../entities/category.entity';
import { CreateCategorytDTO } from '../dto/create-category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  public async createCategory(
    createCategorytDTO: CreateCategorytDTO,
  ): Promise<Category> {
    const { name, parentId, metadata } = createCategorytDTO;

    const category = new Category();
    category.name = name;
    category.parentId = parentId;
    category.metadata = metadata;

    await category.save();
    return category;
  }

  public async editCategory(
    createCategorytDTO: CreateCategorytDTO,
    editedCategory: Category,
  ): Promise<Category> {
    const { name, parentId, metadata } = createCategorytDTO;

    editedCategory.name = name;
    editedCategory.parentId = parentId;
    editedCategory.metadata = metadata;
    await editedCategory.save();

    return editedCategory;
  }
}
