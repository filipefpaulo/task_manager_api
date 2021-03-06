import express, { Request, Response } from 'express';
import 'express-async-errors';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';
import { Routes } from './routes';

export class App {
  private _app = express();
  private routes = new Routes();
  private errorMiddleware = new ErrorMiddleware();

  constructor() {
    this.config();
  }

  private config() {
    const { _app } = this;

    _app.use(express.json());

    _app.get('/', (_req: Request, res: Response) =>
      res.status(200).send('Hey you found me, i am a easteregg!'),
    );
    _app.use(this.routes.init);

    _app.use(this.errorMiddleware.init);
  }

  get app() {
    return this._app;
  }

  listen(PORT: number | string) {
    this._app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  }
}
