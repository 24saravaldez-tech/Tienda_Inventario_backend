import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct, updateProductsStatus, } from "../controllers/productsController.js";
import { idMiddlware, postPatchMiddlware, putMIddlwware } from "../middlewares/productsMiddleware.js";

const productsRoutes = Router()

productsRoutes.param('id', idMiddlware)

productsRoutes.get('/', getAllProducts)
productsRoutes.get('/:id', getOneProduct)
productsRoutes.put('/:id', putMIddlwware, updateProductsStatus)
productsRoutes.post('/', postPatchMiddlware, createProduct)
productsRoutes.patch('/:id/update', postPatchMiddlware, updateProduct)
productsRoutes.delete('/:id', deleteProduct)



export { productsRoutes }