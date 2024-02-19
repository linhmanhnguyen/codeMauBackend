import validators from './validators/index.js'

const validateRequest = (schemaName) => {
    return (req, res, next) => {
        const schema = validators[schemaName]
        const result = schema.validate(req.body);
        if (result.error) {
            return res.status(400).json({
                error: result.error.details[0].message,
            });
        }
        if (!req.value) {
            req.value = {}
        }
        req.value['body'] = result.value
        next()
    }
}

export default validateRequest