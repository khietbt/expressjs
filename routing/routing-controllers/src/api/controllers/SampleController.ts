import { Controller, Get } from 'routing-controllers';

@Controller('/sample')
export class SampleController {
  @Get('/')
  async greeting() {
    return { message: 'Welcome from SampleController' };
  }
}
