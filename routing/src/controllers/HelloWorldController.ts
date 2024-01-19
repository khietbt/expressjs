import { Controller, Get } from 'routing-controllers';

@Controller('/helloworld')
export class HelloWorldController {
  @Get('/')
  async sayHello(): Promise<string> {
    return 'Hello world!';
  }
}
