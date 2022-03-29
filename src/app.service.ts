import { Injectable } from '@nestjs/common';
import { isGeneratorObject } from 'util/types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getObject():any{
 
  }
}