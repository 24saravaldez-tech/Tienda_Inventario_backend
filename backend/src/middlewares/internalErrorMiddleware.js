const internalErrorMiddleware = (error, req, res, next) => {

    console.log('el error: ', error)

    return res.status(500).json({
        message: 'Error 500'
    })

}

export { internalErrorMiddleware }