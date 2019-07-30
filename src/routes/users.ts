import { Router, Request, Response, NextFunction } from 'express';
const router = Router();

/* GET users listing. */
router.get('/', (_req: Request, res: Response, _next: NextFunction) => {
  res.status(200).json({ message: 'successful' });
});

export default router;
