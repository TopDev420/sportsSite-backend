import { Repository, EntityRepository } from 'typeorm';
import { Bid } from '../entities/bid.entity';
import { CreateBidDTO } from '../dto/create-bid.dto';

@EntityRepository(Bid)
export class BidRepository extends Repository<Bid> {
  public async createBid(createBidDTO: CreateBidDTO): Promise<Bid> {
    const { offerId, price, bidder, won } = createBidDTO;

    const bid = new Bid();
    bid.offerId = offerId;
    bid.price = price;
    bid.bidder = bidder;
    bid.won = won;

    await bid.save();
    return bid;
  }

  public async editBid(
    createBidDTO: CreateBidDTO,
    editedBid: Bid,
  ): Promise<Bid> {
    const { offerId, price, bidder, won } = createBidDTO;

    editedBid.offerId = offerId;
    editedBid.price = price;
    editedBid.bidder = bidder;
    editedBid.won = won;
    await editedBid.save();

    return editedBid;
  }
}
