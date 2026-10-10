import { Router } from "express";
import { createProduct, getAllProducts, getOneProduct, updateProducts } from "../controllers/productsController.js";

const productsRoutes = Router()

productsRoutes.get('/', getAllProducts)
productsRoutes.get('/:id', getOneProduct)
productsRoutes.put('/:id', updateProducts)
productsRoutes.post('/new', createProduct)


export { productsRoutes }