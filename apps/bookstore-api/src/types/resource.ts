import  { Request, Response } from 'express';

export interface ResourceController {
  index: (req: Request, res: Response) => void;
  show: (req: Request, res: Response) => void;
  destroy: (req: Request, res: Response, id: number) => void;
  range: (req: Request, res: Response, a: number, b: number, format?: string) => void;
}
