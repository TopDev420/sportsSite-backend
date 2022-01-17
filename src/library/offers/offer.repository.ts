import { Repository, EntityRepository } from 'typeorm';
import { Offer } from '../entities/offer.entity';
import { CreateOfferDTO } from '../dto/create-offer.dto';

@EntityRepository(Offer)
export class OfferRepository extends Repository<Offer> {
  public async createOffer(createOfferDTO: CreateOfferDTO): Promise<Offer> {
    const { itemId, eventId, offerType, closed } = createOfferDTO;

    const offer = new Offer();
    offer.itemId = itemId;
    offer.eventId = eventId;
    offer.offerType = offerType;
    offer.closed = closed;

    await offer.save();
    return offer;
  }

  public async editOffer(
    createOfferDTO: CreateOfferDTO,
    editedOffer: Offer,
  ): Promise<Offer> {
    const { itemId, eventId, offerType, closed } = createOfferDTO;

    editedOffer.itemId = itemId;
    editedOffer.eventId = eventId;
    editedOffer.offerType = offerType;
    editedOffer.closed = closed;
    await editedOffer.save();

    return editedOffer;
  }
}
