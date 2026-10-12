import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct, updateProductsStatus, } from "../controllers/productsController.js";
import { productMiddleware } from "../middlewares/productsMiddleware.js";
import { createProductSchema, statusSchema, updateProductSchema } from "../schemas/productsSchema.js";

const productsRoutes = Router()


productsRoutes.get('/', getAllProducts)
productsRoutes.get('/:id', getOneProduct)
productsRoutes.put('/:id', productMiddleware(statusSchema), updateProductsStatus)
productsRoutes.post('/', productMiddleware(createProductSchema), createProduct)
productsRoutes.patch('/:id/update', productMiddleware(updateProductSchema), updateProduct)
productsRoutes.delete('/:id', deleteProduct)



export { productsRoutes }