import express from 'express'

import cityRouter from './city.routes'
import countryRouter from './country.routes'
import districtRouter from './district.routes'
import occupationRouter from './occupation.routes'
import provinceRouter from './province.routes'
import subDistrictRouter from './subDistrict.routes'

const masterRouter = express.Router({ mergeParams: true })

masterRouter.use('/district', districtRouter)
masterRouter.use('/sub-district', subDistrictRouter)
masterRouter.use('/occupation', occupationRouter)
masterRouter.use('/city', cityRouter)
masterRouter.use('/province', provinceRouter)
masterRouter.use('/country', countryRouter)

export default masterRouter
