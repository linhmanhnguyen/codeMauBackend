import Joi from 'joi'

export default Joi.object({
    email: Joi.string().email().lowercase().required(),
    url: Joi.string().uri().required()
})