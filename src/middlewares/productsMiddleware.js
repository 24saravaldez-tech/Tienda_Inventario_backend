const productsMiddleware = (error, req, res, next) => {

    console.log('el error: ', error)

    res.status(500).json({
        message: error.message
    })

}

export { productsMiddleware }