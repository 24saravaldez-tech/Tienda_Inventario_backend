import { createOneProduct, deleteOneProducts, getProductsCode, getProductos, getSingleProduct, updateOneProduct, updateOneProductsStatus } from "../repositories/productsRespositorie.js"

// status code:

// 200 => todo salió bien (consulta, actualizacion, eliminacion)
// 201 => se creó correctamente un recurso

// 400 => la petición es incorrecta (datos o id invalidos)
// 404 => el recurso solicitado no existe
// 409 => conflicto (codigo de producto duplicado)

// 500 => error interno del servidor (lo maneja internalErrorMiddleware)


const getAllProducts = async (req, res) => {
    const productos = await getProductos();
    return res.status(200).json({ data: productos })
}

const getOneProduct = async (req, res) => {

    const producto = await getSingleProduct(req.params.id);
    if (!producto) {
        return res.status(404).json({ message: 'No se ha encontrado ningun producto con ese id' })
    } else {
        return res.status(200).json({ data: producto })
    }

}

const updateProductsStatus = async (req, res) => {

    const producto = await updateOneProductsStatus(req.params.id, req.body.estado);

    if (!producto) {
        return res.status(404).json({ message: 'No se ha encontrado este producto' })
    } else {
        return res.status(200).json({ message: 'Estado del producto actualizado correctamente', data: producto })
    }

}

const updateProduct = async (req, res) => {

    const buscar = await getSingleProduct(req.params.id)
    const existe = await getProductsCode(req.body.codigo)


    if (!buscar) {
        return res.status(404).json({ message: 'No se ha encontrado este producto' })

    }

    if (existe && existe.id_productos != Number(req.params.id)) {
        return res.status(409).json({ message: 'Ya hay un producto con ese codigo. No pueden haber dos codigos iguales' })
    }

    const producto = await updateOneProduct(req.params.id, req.body)

    return res.status(200).json({ message: 'El producto se ha actualizado con los nuevos datos', data: producto })
}

const createProduct = async (req, res) => {
    const existe = await getProductsCode(req.body.codigo)

    if (existe) {
        return res.status(409).json({ message: 'Ya hay un producto con ese codigo. No pueden haber dos codigos iguales' })
    }

    const producto = await createOneProduct(req.body)
    return res.status(201).json({ message: 'Producto creado correctamente', data: producto })
}

const deleteProduct = async (req, res) => {
    const producto = await deleteOneProducts(req.params.id)

    if (!producto) {
        return res.status(404).json({ message: 'No se ha encontrado este producto' })
    } else {
        return res.status(200).json({ message: 'Producto eliminado correctamente', data: producto })
    }
}

export { updateProductsStatus, getAllProducts, createProduct, getOneProduct, deleteProduct, updateProduct }