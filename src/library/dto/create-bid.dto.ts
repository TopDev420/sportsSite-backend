import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateBidDTO {
  @IsNumber()
  offerId: number;

  @IsNumber()
  price: number;

  @IsString()
  bidder: string;

  @IsBoolean()
  won: boolean;
}
