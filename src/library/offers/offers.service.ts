import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Offer } from '../entities/offer.entity';
import { CreateOfferDTO } from '../dto/create-offer.dto';
import { OfferRepository } from './offer.repository';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(OfferRepository)
    private offerRepository: OfferRepository,
  ) {}

  public async createOffer(createOfferDTO: CreateOfferDTO): Promise<Offer> {
    return await this.offerRepository.createOffer(createOfferDTO);
  }

  public async getOffers(): Promise<Offer[]> {
    return await this.offerRepository.find();
  }

  public async getOffer(offerId: number): Promise<Offer> {
    const foundOffer = await this.offerRepository.findOne(offerId);
    if (!foundOffer) throw new NotFoundException('Offer noe found');
    return foundOffer;
  }

  public async editOffer(
    offerId: number,
    createOfferDTO: CreateOfferDTO,
  ): Promise<Offer> {
    const editedOffer = await this.offerRepository.findOne(offerId);
    if (!editedOffer) throw new NotFoundException('Offer not found');
    return this.offerRepository.editOffer(createOfferDTO, editedOffer);
  }

  public async deleteOffer(offerId: number): Promise<void> {
    await this.offerRepository.delete(offerId);
  }
}
