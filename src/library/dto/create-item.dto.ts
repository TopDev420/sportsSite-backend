import { IsNumber, IsString } from 'class-validator';

export class CreateItemDTO {
  @IsString()
  name: string;

  @IsNumber()
  eventId: number;

  @IsString()
  creator: string;

  @IsNumber()
  royalties: number;
}
