import { createOneProduct, deleteOneProducts, getProductos, getSingleProduct, updateOneProduct, updateOneProductsStatus } from "../repositories/productsRespositorie.js"

const getAllProducts = async (req, res) => {
    const productos = await getProductos();
    return res.status(200).json({ data: productos })
}

const getOneProduct = async (req, res) => {
    const productos = await getSingleProduct(req.params.id);
    return res.status(200).json({ data: productos })
}

const updateProductsStatus = async (req, res) => {
    const producto = await updateOneProductsStatus(req.params.id, req.body.estado);
    return res.status(200).json({ data: producto })
}

const updateProduct = async (req, res) => {
    const producto = await updateOneProduct(req.params.id, req.body);
    return res.status(200).json({ data: producto })
}

const createProduct = async (req, res) => {
    const respose = await createOneProduct(req.body)
    return res.status(200).json({ data: respose })
}

const deleteProduct = async (req, res) => {
    const respose = await deleteOneProducts(req.params.id)
    return res.status(200).json({ data: respose })
}

export { updateProductsStatus, getAllProducts, createProduct, getOneProduct, deleteProduct, updateProduct }