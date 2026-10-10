import { pool } from "../config/database.js";

const getProductos = async () => {
    try {
        const productos = await pool.query('select * from productos;')
        return productos.rows;

    } catch (error) {
        throw new Error('Hubo un error al intentar obtener todos los productos.')
    }

} //ya


const getSingleProduct = async (id) => {
    try {
        const result = await pool.query('select * from productos where id_productos = $1', [id])
        return result.rows
    } catch (error) {
        throw new Error('Hubo un error al intentar conectar con la DB')
    }
} //ya


const updateOneProductsStatus = async (id, estado) => {

    try {
        const result = await pool.query('update productos set estado = $1 where id_productos = $2 returning *',
            [estado, id])
        return result.rows
    } catch (error) {
        throw new Error('Hubo un error al actualizar un producto')
    }
} //ya

const createOneProduct = async ({ codigo, nombre, descripcion, categoria, marca, precio, stock, estado }) => {

    try {
        const nuevoProducto =
            await pool.query(
                `insert into productos (codigo, nombre, descripcion, categoria, marca, precio, stock, estado) 
                values ($1, $2, $3, $4, $5, $6, $7, $8)`, [codigo, nombre, descripcion, categoria, marca, precio, stock, estado])
        return nuevoProducto.rows;
    } catch (error) {
        throw new Error(error.message)
    }

} //ya


const deleteOneProducts = async (id) => {

    try {
        const productoEliminado =
            await pool.query(
                `delete from productos where id_productos = $1`, [id])
        return productoEliminado.rows;
    } catch (error) {
        throw new Error(error.message)
    }

} //ya

const updateOneProduct = async (id, { codigo, nombre, descripcion, categoria, marca, precio, stock, estado }) => {

    try {
        const productoEditado =
            await pool.query(
                `update productos set codigo = $2, nombre = $3, descripcion = $4, categoria = $5, marca = $6, precio = $7, stock = $8, estado = $9 where id_productos = $1`, [id, codigo, nombre, descripcion, categoria, marca, precio, stock, estado])
        return productoEditado.rows;
    } catch (error) {
        throw new Error(error.message)
    }

} //ya


export { getProductos, createOneProduct, getSingleProduct, updateOneProductsStatus, deleteOneProducts, updateOneProduct }