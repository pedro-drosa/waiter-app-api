import { Request, Response, NextFunction } from 'express';

export default (_request: Request, response: Response, next: NextFunction) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', '*');
  response.setHeader('Access-Control-Allow-Headers', '*');
  next();
};
