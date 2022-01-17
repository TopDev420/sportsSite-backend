import { IsBoolean, IsNumber } from 'class-validator';

export class CreateOfferDTO {
  @IsNumber()
  itemId: number;

  @IsNumber()
  eventId: number;

  @IsNumber()
  offerType: number;

  @IsBoolean()
  closed: boolean;
}
