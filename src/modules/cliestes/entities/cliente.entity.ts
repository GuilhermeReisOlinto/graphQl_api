/* eslint-disable prettier/prettier */
//Só importação de TypeOrm
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity('cad_cliente', { synchronize: false })
export class Cliente {

  @PrimaryGeneratedColumn()
  id_cliente: number;
  
  @Column()
  nome: string;

  @Column({ type: 'varchar', nullable: true, unique: true })
  cpf: string;

  @Column()
  email: string;

  @Column()
  cep: string;

  @Column()
  cidade: string;

  @Column()
  uf: string;

  @Column()
  logradouro: string;

  @Column()
  numero: number;

  @Column()
  bairro: string;
  
}


