import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OffersService } from './offers.service';
import { CreateOfferDTO } from '../dto/create-offer.dto';
import { Offer } from '../entities/offer.entity';

@Controller('offers')
export class OffersController {
  constructor(private offersService: OffersService) {}

  @Post('create')
  public async createOffer(
    @Body() createOfferDTO: CreateOfferDTO,
  ): Promise<Offer> {
    const offer = await this.offersService.createOffer(createOfferDTO);
    return offer;
  }

  @Get('all')
  public async getCategories(): Promise<Offer[]> {
    const offers = await this.offersService.getOffers();
    return offers;
  }

  @Get('/:offerId')
  public async getOffer(@Param('offerId') offerId: number) {
    const offer = await this.offersService.getOffer(offerId);
    return offer;
  }

  @Patch('/edit/:offerId')
  public async editProduct(
    @Body() createOfferDTO: CreateOfferDTO,
    @Param('offerId') offerId: number,
  ): Promise<Offer> {
    const offer = await this.offersService.editOffer(offerId, createOfferDTO);
    return offer;
  }

  @Delete('/delete/:offerId')
  public async deleteOffer(@Param('offerId') offerId: number) {
    const deleteOffer = await this.offersService.deleteOffer(offerId);
    return deleteOffer;
  }
}
