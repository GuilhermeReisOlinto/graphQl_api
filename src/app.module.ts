/* eslint-disable prettier/prettier */
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DatabaseConnectionService } from './shared/services/databaseConnection.service';
import { ClientesModule } from './modules/cliestes/clientes.module';



@Module({
  imports:[
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),

    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),

   ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: [`.env.development`],
  }),

    ClientesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
