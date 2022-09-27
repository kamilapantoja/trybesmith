import { NextFunction, Request, Response } from 'express';

// username, classe, level, password

function validateData(req: Request, res: Response, next: NextFunction) {
  const user = req.body;

  if (!user.username) return res.status(400).json({ message: 'Username is required' });
  if (!user.classe) return res.status(400).json({ message: 'Classe is required' });
  if (!user.level) return res.status(400).json({ message: 'Level is required' });
  if (!user.password) return res.status(400).json({ message: 'Password is required' });

  next();
}

export default validateData;