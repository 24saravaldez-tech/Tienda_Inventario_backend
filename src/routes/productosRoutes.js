import { Router } from "express";
import { createProduct, deleteProduct, getAllProducts, getOneProduct, updateProduct, updateProductsStatus,  } from "../controllers/productsController.js";

const productsRoutes = Router()

productsRoutes.get('/', getAllProducts)
productsRoutes.get('/:id', getOneProduct)
productsRoutes.put('/:id', updateProductsStatus)
productsRoutes.patch('/:id/update', updateProduct)
productsRoutes.post('/new', createProduct)
productsRoutes.delete('/:id/delete', deleteProduct)



export { productsRoutes }