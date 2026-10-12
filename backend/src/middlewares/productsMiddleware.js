const productMiddleware = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            message: 'Los datos enviados no son validos',
            errors: result.error.issues.map((error) => error.message)
        })
    }

    req.body = result.data

    next()
}


export { productMiddleware }