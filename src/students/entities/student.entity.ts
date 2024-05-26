import { Column, DeleteDateColumn, Entity } from 'typeorm';

@Entity()
export class Student {
  @Column({ primary: true })
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  career: string;

  @Column({ default: 'Proceso' })
  state: string;

  @Column({ default: 0 })
  percentage: number;

  @DeleteDateColumn()
  deletedAt: Date;
}
