import { createOneProduct, getProductos, getSingleProduct, updateOneProduct } from "../repositories/productsRespositorie.js"

const getAllProducts = async (req, res) => {
    const productos = await getProductos();

    return res.status(200).json({ data: productos })
}

const getOneProduct = async (req, res) => {
    const productos = await getSingleProduct(req.params.id);
    return res.status(200).json({ data: productos })
}

const updateProducts = async (req, res) => {
    const producto = await updateOneProduct(req.params.id, req.body.nombre);
    return res.status(200).json({ data: producto })
}


const createProduct = async (req, res) => {
    const respose = await createOneProduct(req.body)
    return res.status(200).json({ data: respose })
}

export { updateProducts, getAllProducts, createProduct, getOneProduct }