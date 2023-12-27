import 'reflect-metadata';
import { Controller, Get, Param } from 'routing-controllers';

@Controller('/posts')
class PostController {
  @Get('')
  getAll() {
    return 'Hello world, again, again';
  }

  @Get('/:id')
  getOne(@Param('id') id: number) {
    return {
      greeting: `hello ${id}`
    };
  }
}

export { PostController };
