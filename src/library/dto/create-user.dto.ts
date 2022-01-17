import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  address: string;

  @IsString()
  username: string;
}
