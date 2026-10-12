import { z } from 'zod'


const statusSchema = z.object({
    estado: z
        .boolean('El estado debe ser Activo o Inactivo')
})

const idSchema = z.object({
    id: z.string()

})


const createProductSchema = z.object({
    codigo: z
        .string()
        .trim()
        .min(1, 'Debe ingresar un codigo')
        .max(20, 'El codigo no puede tener mas de 20 caracteres'),

    nombre: z
        .string()
        .trim()
        .min(3, 'El nombre debe tener minimo 3 caracteres')
        .max(100, 'El nombre no puede tener mas de 100 caracteres'),

    descripcion: z
        .string()
        .trim(),

    categoria: z
        .string()
        .trim()
        .min(1, 'Debe escribir un tipo de categoria')
        .max(50, 'La categoria no debe tener mas de 50 caracteres'),

    marca: z
        .string()
        .trim()
        .min(1, 'Escriba la marca del producto')
        .max(50, 'El nombre de la marca no debe tener mas de 50 caracteres'),

    precio: z
        .number('El precio debe ser un numero')
        .positive('El precio debe ser mayor que 0'),

    stock: z
        .number('Ingrese una cantidad de stock')
        .int('Debe ser un número entero')
        .min(0, 'El stock no puede ser negativo'),

    estado: z
        .boolean('El estado debe ser Activo o Inactivo')
})


export { createProductSchema, statusSchema, idSchema }