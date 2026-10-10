import express from 'express';
import { productsRoutes } from './src/routes/productosRoutes.js';
import { productsMiddleware } from './src/middlewares/productsMiddleware.js';
import { pool } from './src/config/database.js';
const app = express()

app.use(express.json())

app.use('/api/productos', productsRoutes)

app.use(productsMiddleware)


try {
    await pool.query('select 2')

    console.log('Postgres conectado')

    app.listen(process.env.PORT, () => {
        console.log('El servidor se esta ejecutando')
    })

} catch (error) {
    console.log(error, 'error al conectar postgress')
    await pool.end();
}