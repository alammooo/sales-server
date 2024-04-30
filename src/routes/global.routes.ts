import express from 'express';

import {
  createRoleUnitController,
  getAccreditationMenuController,
} from '@/controllers/global.controllers';
import adminOnly from '@/middleware/adminOnly';
import authentication from '@/middleware/authentication';

const globalRoute = express.Router();

globalRoute.get('/accreditation-menu', getAccreditationMenuController);
globalRoute.post('/role-unit', authentication, adminOnly, createRoleUnitController);

export default globalRoute;
