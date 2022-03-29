import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ length: 255 })
  faculdade: string;

  @Column({ length: 200 })
  curso: string;

  @Column({ length: 200 })
  periodo: string;

}