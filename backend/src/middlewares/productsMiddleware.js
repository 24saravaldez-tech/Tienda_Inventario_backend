import { createProductSchema, idSchema, statusSchema } from "../schemas/productsSchema.js"

const idMiddlware = (req, res, next, id) => {
    const result = idSchema.safeParse(id)

    if (!result.success) {
        return res.status(400).json({
            message: 'El id no es valido',
            errors: result.error.issues.map((error) => error.message)
        })
    }

    next()
}


const putMIddlwware = (req, res, next) => {
    const result = statusSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            message: 'El estado es incorrecto',
            errors: result.error.issues.map((error) => error.message)
        })
    }

    req.body = result.data

    next()
}


const postPatchMiddlware = (req, res, next) => {
    const result = createProductSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            message: 'Los datos no son validos. Intente de nuevo',
            errors: result.error.issues.map((error) => error.message)
        })
    }

    req.body = result.data

    next()
}


export { idMiddlware, putMIddlwware, postPatchMiddlware }