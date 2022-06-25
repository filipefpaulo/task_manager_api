import { Router } from 'express';
import { TaskRoute } from './TaskRoute';

export class Routes {
  private _routes = Router();
  private task = new TaskRoute();

  constructor() {
    this.config();
  }

  get init() {
    return this._routes;
  }

  private config() {
    this._routes.use('/tasks', this.task.route);
  }
}
