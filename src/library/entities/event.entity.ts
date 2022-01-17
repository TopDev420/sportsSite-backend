import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  categoryId: number;

  @Column()
  regionId: number;

  @Column()
  homeTeamId: number;

  @Column()
  awayTeamId: number;

  @Column({ type: 'timestamp' })
  startAt: Date;

  @Column()
  duration: Number;
}
