import express from 'express';

import {
  createRoleController,
  deleteRoleController,
  getAllRoleController,
  updateRoleController,
} from '@/controllers/role.controllers';
import adminOnly from '@/middleware/adminOnly';

const roleRouter = express.Router();

roleRouter.get('/', getAllRoleController);
roleRouter.use(adminOnly);
roleRouter.post('/', createRoleController);
roleRouter.patch('/:roleId', updateRoleController);
roleRouter.delete('/:roleId', deleteRoleController);

export default roleRouter;
