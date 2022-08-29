/* eslint-disable prettier/prettier */
//Só importação de GrafhQL
import { FilterableField } from "@nestjs-query/query-graphql";
import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType('Cliente')
export class CliesteDto {

  @Field()
  id: number;
  
  @FilterableField()
  nome: string;

  @FilterableField()
  cpf: string;

  @FilterableField()
  email: string;

  @FilterableField()
  cep: string;

  @FilterableField()
  cidade: string;

  @FilterableField()
  uf: string;

  @FilterableField()
  logradouro: string;

  @FilterableField()
  numero: number;

  @FilterableField()
  bairro: string;

}


