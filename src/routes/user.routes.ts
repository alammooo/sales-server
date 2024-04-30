import express from 'express'

import {
  deleteController,
  getAllController,
  getByIdController,
  reqUserController,
  updateController,
} from '@/controllers/user.controllers'

const userRouter = express.Router()

userRouter.get('/', getAllController)
userRouter.get('/profile', reqUserController)
userRouter.get('/:userId', getByIdController)
userRouter.patch('/:userId', updateController)
userRouter.delete('/:userId', deleteController)

export default userRouter
