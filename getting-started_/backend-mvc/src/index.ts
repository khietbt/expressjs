import dotenv from 'dotenv';
import { createExpressServer } from 'routing-controllers';
import { PostController } from '@src/controllers';

dotenv.config();

const port = process.env.PORT || '2000';

// const application = new Application([new PostController()], +port);
// application.listen();

const application = createExpressServer({
  controllers: [PostController]
});

application.listen(+port);
