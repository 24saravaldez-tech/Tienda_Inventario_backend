import express from 'express';
import cors from 'cors';
import { productsRoutes } from './src/routes/productosRoutes.js';
import { pool } from './src/config/database.js';
import { registerMiddleware } from './src/middlewares/registerMIddleware.js';
import { internalErrorMiddleware } from './src/middlewares/internalErrorMiddleware.js';
import { notFoundMiddleware } from './src/middlewares/error404Middleware.js';


const app = express()

app.use(registerMiddleware)

app.use(cors({ origin: 'http://localhost:5173' }))

app.use(express.json())

app.use('/api/productos', productsRoutes)

app.use(notFoundMiddleware)

app.use(internalErrorMiddleware)


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