
import express from 'express'
import {CONSTANTS} from '../../utils/constants.js'

import siteAPIs from './sites/index.js'
import searchAPIs from './search/index.js'
import chatAPIs from './chat/index.js'

const router = express.Router()

router.use(CONSTANTS.API_SITES,  siteAPIs)
router.use(CONSTANTS.API_SEARCHS, searchAPIs)
router.use(CONSTANTS.API_CHAT, chatAPIs)

export default router

