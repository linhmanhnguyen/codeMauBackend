
import express from 'express'
import {CONSTANTS} from '../../../utils/constants.js'
import registerSite from './register-site.js'
import importSiteData from './init-data.js'

const router = express.Router()

router.use("/",  registerSite)
router.use(CONSTANTS.API_SITES_IMPORT, importSiteData)

export default router

