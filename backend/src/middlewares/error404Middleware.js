const notFoundMiddleware = (req, res, next) => {
    return res.status(404).json({ message: 'Pagina no encontrada' })
}

export { notFoundMiddleware }