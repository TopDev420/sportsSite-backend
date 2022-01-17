import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Offer extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  itemId: number;

  @Column()
  eventId: number;

  @Column()
  offerType: number;

  @Column({ type: 'timestamp' })
  startAt: Date;

  @Column()
  endAt: string;

  @Column()
  closed: boolean;
}
