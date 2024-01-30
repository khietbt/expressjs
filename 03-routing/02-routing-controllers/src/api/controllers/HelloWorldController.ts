import { Controller, Get } from 'routing-controllers';

@Controller('/helloworld')
export class HelloWorldController {
  @Get('/')
  async sayHello() {
    return { message: 'Welcome from HelloWorldController' };
  }
}
