import express from 'express'

import authentication from '@/middleware/authentication'

import authRouter from './auth.routes'
import globalRoute from './global.routes'
import masterRouter from './master/master.routes'
import patientRouter from './patient/patient.routes'
import roleRouter from './role.routes'
import userRouter from './user.routes'
import courseRouter from './course.routes'
import salesRouter from './sales.routes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/patient/patient', patientRouter)
router.use('/master', masterRouter)
// router.use(authentication)
router.use('/user', userRouter)
router.use('/assets', express.static('assets'))
router.use('/global', globalRoute)
router.use('/role', roleRouter)
router.use('/sales', salesRouter)
router.use('/course', courseRouter)

export default router
