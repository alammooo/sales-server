import express from 'express';

import { login, register } from '@/controllers/auth.controllers';
import adminOnly from '@/middleware/adminOnly';
import authentication from '@/middleware/authentication';

const authRouter = express.Router();

authRouter.post('/login', login);
// authRouter.post('/register', authentication, adminOnly, register);
authRouter.post('/register', register);

export default authRouter;
