import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Bid } from '../entities/bid.entity';
import { CreateBidDTO } from '../dto/create-bid.dto';
import { BidRepository } from './bid.repository';

@Injectable()
export class BidsService {
  constructor(
    @InjectRepository(BidRepository)
    private bidRepository: BidRepository,
  ) {}

  public async createBid(createBidDTO: CreateBidDTO): Promise<Bid> {
    return await this.bidRepository.createBid(createBidDTO);
  }

  public async getBids(): Promise<Bid[]> {
    return await this.bidRepository.find();
  }

  public async getBid(bidId: number): Promise<Bid> {
    const foundBid = await this.bidRepository.findOne(bidId);
    if (!foundBid) throw new NotFoundException('Bid noe found');
    return foundBid;
  }

  public async editBid(
    bidId: number,
    createBidDTO: CreateBidDTO,
  ): Promise<Bid> {
    const editedBid = await this.bidRepository.findOne(bidId);
    if (!editedBid) throw new NotFoundException('Bid not found');
    return this.bidRepository.editBid(createBidDTO, editedBid);
  }

  public async deleteBid(bidId: number): Promise<void> {
    await this.bidRepository.delete(bidId);
  }
}
