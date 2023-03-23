import { Request, Response, NextFunction } from 'express';

export default class ErrorHandler {
  static handle(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err.message === 'Car not found') {
      return res.status(404).json({ message: 'Car not found' });
    }
    // Se a exceção não for relacionada ao erro de carro não encontrado,
    // passe o erro para o próximo middleware de tratamento de erros
    next(err);
  }
}
