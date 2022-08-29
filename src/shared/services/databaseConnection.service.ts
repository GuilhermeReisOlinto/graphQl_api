/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      host: this.configService.get<string>('TYPEORM_HOST'),
      port: Number(this.configService.get<number>('TYPEORM_PORT')),
      username: this.configService.get<string>('TYPEORM_USER'),
      password: this.configService.get<string>('TYPEORM_PASSWORD'),
      database: this.configService.get<string>('TYPEORM_DB'),
      synchronize: false,
      //quando setado como true faz um drop no database inteiro
      dropSchema: false,
      logging: false,
      entities: ['**/modules/**/entities/*.js'],
    };
  }
}
