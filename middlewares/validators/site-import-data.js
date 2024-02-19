import Joi from 'joi'

export default Joi.object({
    site: Joi.string().uri().required(),
    title: Joi.string().required(),
    products: Joi.array().required(),
    posts: Joi.array().required(),
})