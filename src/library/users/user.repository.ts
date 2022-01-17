import { Repository, EntityRepository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDTO } from '../dto/create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(createUserDTO: CreateUserDTO): Promise<User> {
    const { address, username } = createUserDTO;

    const user = new User();
    user.address = address;
    user.username = username;

    await user.save();
    return user;
  }

  public async editUser(
    createUserDTO: CreateUserDTO,
    editedUser: User,
  ): Promise<User> {
    const { address, username } = createUserDTO;

    editedUser.address = address;
    editedUser.username = username;
    await editedUser.save();

    return editedUser;
  }
}
