import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Bid extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  offerId: number;

  @Column()
  price: number;

  @Column({ type: 'timestamp' })
  biddedAt: Date;

  @Column()
  bidder: string;

  @Column()
  canceledAt: string;

  @Column()
  won: boolean;
}
