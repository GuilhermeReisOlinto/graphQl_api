/* eslint-disable prettier/prettier */
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CliesteDto } from './dto/cliente.dto';
import { CreateClienteInput } from './dto/create-cliente.input';
import { UpdateClienteInput } from './dto/update-cliente.input';
import { Cliente } from './entities/cliente.entity';


@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Cliente])],
      resolvers: [
        {
          DTOClass: CliesteDto, 
          EntityClass: Cliente, 
          CreateDTOClass: CreateClienteInput,
          UpdateDTOClass: UpdateClienteInput,
          enableTotalCount: true,
        }],
    }),
  ],
  providers: [],
})
export class ClientesModule {}
