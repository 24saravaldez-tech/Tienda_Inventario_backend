import { createOneProduct, deleteOneProducts, getProductos, getSingleProduct, updateOneProduct, updateOneProductsStatus } from "../repositories/productsRespositorie.js"

// status code:

// 200 => todo salió bien
// 201 => se creó correctamente un recurso

// 400 => la petición es incorrecta
// 404 => el recurso solicitado no existe
// 405 => el método HTTP no está permitido
// 422 => los datos enviados no son válidos

// 500 => error interno del servidor



const getAllProducts = async (req, res) => {
    const productos = await getProductos();
    return res.status(200).json({ data: productos })
}

const getOneProduct = async (req, res) => {
    const productos = await getSingleProduct(req.params.id);
    if (!productos) {
        return res.status(404).json({ message: 'No se ha encontrado ningun producto con ese id' })
    } else {
        return res.status(200).json({ data: productos })
    }
}

const updateProductsStatus = async (req, res) => {
    const producto = await updateOneProductsStatus(req.params.id, req.body.estado);

    if (!producto) {
        return res.status(404).json({ message: 'No se ha encontrado este producto' })
    } else {
        return res.status(200).json({ data: producto })
    }
}

const updateProduct = async (req, res) => {
    const producto = await updateOneProduct(req.params.id, req.body);
    if (!producto) {
        return res.status(404).json({ message: 'No se ha encontrado este producto' })
    } else {
        return res.status(200).json({ data: producto })
    }
}

const createProduct = async (req, res) => {
    const producto = await createOneProduct(req.body)
    if (!producto) {
        return res.status(404).json({ message: 'No se ha podido crear el producto' })
    } else {
        return res.status(201).json({ data: producto })
    }
}

const deleteProduct = async (req, res) => {
    const producto = await deleteOneProducts(req.params.id)
    if (!producto) {
        return res.status(404).json({ message: 'No se ha podido eliminar el producto' })
    } else {
        return res.status(201).json({ data: producto })
    }
}

export { updateProductsStatus, getAllProducts, createProduct, getOneProduct, deleteProduct, updateProduct }