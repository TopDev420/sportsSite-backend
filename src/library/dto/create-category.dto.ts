import { IsNumber, IsString } from 'class-validator';

export class CreateCategorytDTO {
  @IsString()
  name: string;

  @IsNumber()
  parentId: number;

  @IsString()
  metadata: string;
}
