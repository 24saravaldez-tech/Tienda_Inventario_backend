import { pool } from "../config/database.js";


const getProductos = async () => {
    const productos = await pool.query('select * from productos order by id_productos;')
    return productos.rows;
}


const getSingleProduct = async (id) => {
    const result = await pool.query('select * from productos where id_productos = $1', [id])
    return result.rows[0]
}



const updateOneProductsStatus = async (id, estado) => {
    const result = await pool.query('update productos set estado = $1 where id_productos = $2 returning *',
        [estado, id])
    return result.rows[0]
}


const createOneProduct = async ({ codigo, nombre, descripcion, categoria, marca, precio, stock, estado }) => {
    const nuevoProducto = await pool.query(
        `insert into productos (codigo, nombre, descripcion, categoria, marca, precio, stock, estado) 
            values ($1, $2, $3, $4, $5, $6, $7, $8)
            returning *`,
        [codigo, nombre, descripcion, categoria, marca, precio, stock, estado])

    return nuevoProducto.rows[0]
}


const deleteOneProducts = async (id) => {
    const productoEliminado =
        await pool.query(
            `delete from productos where id_productos = $1 returning *`, [id])
    return productoEliminado.rows[0]
}


const updateOneProduct = async (id, { codigo, nombre, descripcion, categoria, marca, precio, stock, estado }) => {
    const productoEditado = await pool.query(
        `update productos set 
            codigo = $2, nombre = $3, descripcion = $4, categoria = $5, marca = $6, precio = $7, stock = $8, estado = $9 
            where id_productos = $1
            returning *`,
        [id, codigo, nombre, descripcion, categoria, marca, precio, stock, estado])
    return productoEditado.rows[0]
}


export { getProductos, createOneProduct, getSingleProduct, updateOneProductsStatus, deleteOneProducts, updateOneProduct }