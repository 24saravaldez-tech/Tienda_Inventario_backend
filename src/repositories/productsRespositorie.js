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


const updateOneProduct = async (id, nombre) => {
    try {
        const result = await pool.query('update productos set nombre = $1 where id_productos = $2 returning *',
            [nombre, id])
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


            console.log(nuevoProducto)
        return nuevoProducto.rows;
    } catch (error) {
        throw new Error(error.message)
    }

} //ya




export { getProductos, createOneProduct, getSingleProduct, updateOneProduct }