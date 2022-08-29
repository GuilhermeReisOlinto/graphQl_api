import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateClienteInput {
  @Field()
  nome: string;
  @Field({ nullable: true })
  cpf: string;
  @Field()
  email: string;
  @Field()
  cep: string;
  @Field()
  cidade: string;
  @Field()
  uf: string;
  @Field()
  logradouro: string;
  @Field()
  numero: number;
  @Field()
  bairro: string;
}
