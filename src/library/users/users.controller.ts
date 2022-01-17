import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post('create')
  public async createUser(@Body() createUserDTO: CreateUserDTO): Promise<User> {
    const user = await this.usersService.createUser(createUserDTO);
    return user;
  }

  @Get('all')
  public async getCategories(): Promise<User[]> {
    const users = await this.usersService.getUsers();
    return users;
  }

  @Get('/:userId')
  public async getUser(@Param('userId') userId: number) {
    const user = await this.usersService.getUser(userId);
    return user;
  }

  @Patch('/edit/:userId')
  public async editProduct(
    @Body() createUserDTO: CreateUserDTO,
    @Param('userId') userId: number,
  ): Promise<User> {
    const user = await this.usersService.editUser(userId, createUserDTO);
    return user;
  }

  @Delete('/delete/:userId')
  public async deleteUser(@Param('userId') userId: number) {
    const deleteUser = await this.usersService.deleteUser(userId);
    return deleteUser;
  }
}
