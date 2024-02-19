import express from 'express'

import validateRequest from '../../../middlewares/validator.js'
import apiKeyAuthenticate from '../../../middlewares/authentication/apiKeyAuthentication.js'
import { CONSTANTS } from '../../../utils/constants.js'


const initDataRouter = express.Router()

initDataRouter.post("/", apiKeyAuthenticate(), validateRequest(CONSTANTS.VALIDATOR_SITE_DATA), (req, res) => {

})

export default initDataRouter