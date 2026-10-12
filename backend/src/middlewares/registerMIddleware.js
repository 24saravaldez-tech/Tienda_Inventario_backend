const registerMiddleware = (req, res, next) => {
    console.log(`[${req.method}] ${req.ourl}`)
    next()
}

export { registerMiddleware }