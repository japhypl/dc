import type { RequestHandler } from 'express';

const PUBLIC_PATHS = ['/api/login', '/api/health'];

export const requireAuth: RequestHandler = (req, res, next) => {
  if (PUBLIC_PATHS.includes(req.path)) return next();
  if (req.session?.authenticated) return next();
  res.status(401).json({ error: 'unauthorized' });
};
