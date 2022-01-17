import { IsNumber, IsString } from 'class-validator';

export class CreateEventDTO {
  @IsString()
  name: string;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  regionId: number;

  @IsNumber()
  homeTeamId: number;

  @IsNumber()
  awayTeamId: number;

  @IsNumber()
  duration: Number;
}
