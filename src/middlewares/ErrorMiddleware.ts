import { NextFunction, Request, Response } from 'express';
import { ErrorHandler } from '../helpers/ErrorHandler';

export class ErrorMiddleware {
  init = async (
    err: ErrorHandler,
    _req: Request,
    res: Response,
    _next: NextFunction,
  ): Promise<Response> => {
    if (err.statusCode) {
      const { statusCode, message } = err;
      return res.status(statusCode).json(message);
    }
    return res.status(400).json('Ops, something is wrong!');
  };
}
