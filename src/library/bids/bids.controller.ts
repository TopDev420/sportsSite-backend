import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDTO } from '../dto/create-bid.dto';
import { Bid } from '../entities/bid.entity';

@Controller('bids')
export class BidsController {
  constructor(private bidsService: BidsService) {}

  @Post('create')
  public async createBid(@Body() createBidDTO: CreateBidDTO): Promise<Bid> {
    const bid = await this.bidsService.createBid(createBidDTO);
    return bid;
  }

  @Get('all')
  public async getCategories(): Promise<Bid[]> {
    const bids = await this.bidsService.getBids();
    return bids;
  }

  @Get('/:bidId')
  public async getBid(@Param('bidId') bidId: number) {
    const bid = await this.bidsService.getBid(bidId);
    return bid;
  }

  @Patch('/edit/:bidId')
  public async editProduct(
    @Body() createBidDTO: CreateBidDTO,
    @Param('bidId') bidId: number,
  ): Promise<Bid> {
    const bid = await this.bidsService.editBid(bidId, createBidDTO);
    return bid;
  }

  @Delete('/delete/:bidId')
  public async deleteBid(@Param('bidId') bidId: number) {
    const deleteBid = await this.bidsService.deleteBid(bidId);
    return deleteBid;
  }
}
