import express, { Request, Response, Application } from 'express';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

import { ResourceController } from './types/resources';
import { UserController } from './controllers';

// =============================
// Express App Setup
// =============================
const app: Application = express();

// Example root route
app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Hello API' });
});

// =============================
// app.resource Implementation
// =============================
app.resource = function (path: string, controller: ResourceController): void {
  // List all
  app.get(path, controller.index);

  // Range route e.g. /users/1..3(.json)
  app.get(`${path}/:a..:b.:format?`, (req: Request, res: Response) => {
    const a = parseInt(req.params.a, 10);
    const b = parseInt(req.params.b, 10);
    const format = req.params.format;
    controller.range(req, res, a, b, format);
  });

  // Single item
  app.get(`${path}/:id`, controller.show);

  // Delete item
  app.delete(`${path}/:id`, (req: Request, res: Response) => {
    const id = parseInt(req.params.id, 10);
    controller.destroy(req, res, id);
  });
};

// =============================
// Register Resource & Start Server
// =============================
app.resource('/users', UserController);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
