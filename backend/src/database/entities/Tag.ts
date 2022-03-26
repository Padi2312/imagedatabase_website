import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'tag' })
export class Tag extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  tagname!: string;
}