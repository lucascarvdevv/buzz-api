import { Injectable } from '@nestjs/common';
import { isGeneratorObject } from 'util/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject():any{
    let objeto ={
      id:1,
      nome:'lucas'
    }
    return objeto
  }
}