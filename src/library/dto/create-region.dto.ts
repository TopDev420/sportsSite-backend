import { IsString } from 'class-validator';

export class CreateRegionDTO {
  @IsString()
  name: string;

  @IsString()
  metadata: string;
}
