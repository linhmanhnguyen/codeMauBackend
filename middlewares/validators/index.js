import registerSiteValidator from './register-site.js'
import importSiteDataValidator from './site-import-data.js'
import siteSearch from './search.js'
import chat from './chat.js'
import {CONSTANTS} from '../../utils/constants.js'

export default {
    [CONSTANTS.VALIDATOR_SITE_REGISTER] : registerSiteValidator, 
    [CONSTANTS.VALIDATOR_SITE_DATA] : importSiteDataValidator, 
    [CONSTANTS.VALIDATOR_SITE_SEARCH] : siteSearch,
    [CONSTANTS.VALIDATOR_SITE_CHAT] : chat
}