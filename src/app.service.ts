import { Injectable } from '@nestjs/common';
//heloo
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
