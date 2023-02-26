import { CustomErrorOptions } from './custom-error-options';

export default class CustomError extends Error {
  constructor(message: string, options?: CustomErrorOptions) {
    super(message);

    this.name = this.constructor.name;
    this.code = options?.code ?? '';
    this.suggestions = options?.suggestions ?? [];

    Error.captureStackTrace(this, this.constructor);
  }

  code?: string;
  suggestions?: string[];
}
