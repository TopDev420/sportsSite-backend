import { IsString } from 'class-validator';

export class CreateCollectionDTO {
  @IsString()
  name: string;
}
