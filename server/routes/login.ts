import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body ?? {};
  const expectedUser = process.env.AUTH_USER;
  const expectedPass = process.env.AUTH_PASSWORD;

  if (!expectedUser || !expectedPass) {
    console.error('AUTH_USER and AUTH_PASSWORD env vars must be set');
    return res.status(500).json({ error: 'auth_not_configured' });
  }

  if (username === expectedUser && password === expectedPass) {
    req.session.authenticated = true;
    return res.json({ ok: true });
  }

  res.status(401).json({ error: 'invalid_credentials' });
});

router.get('/auth-status', (req, res) => {
  res.json({ authenticated: req.session?.authenticated === true });
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true });
  });
});

export const loginRouter = router;
