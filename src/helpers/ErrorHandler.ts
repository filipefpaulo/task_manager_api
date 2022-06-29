export class ErrorHandler extends Error {
  constructor(message: string, readonly statusCode: number) {
    super(message);
  }
}
