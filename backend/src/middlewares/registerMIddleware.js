const registerMiddleware = (req, res, next) => {
    console.log(`[${req.method}] ${req.url}`)
    next()
}

export { registerMiddleware }
