import { z } from 'zod'

const idSchema = z
    .string()
    .regex(/^\d+$/, "El texto debe contener solo números enteros")

const createProductSchema = z.object({
    codigo: z
        .string('Escriba un codigo para el producto')
        .trim()
        .min(1, 'Debe ingresar un codigo')
        .max(20, 'El codigo no puede tener mas de 20 caracteres'),

    nombre: z
        .string('Ingrese el nombre del producto')
        .trim()
        .min(3, 'El nombre debe tener minimo 3 caracteres')
        .max(100, 'El nombre no puede tener mas de 100 caracteres'),

    descripcion: z
        .string()
        .trim()
        .nullish(),

    categoria: z
        .string('Ingrese el nombre de una categoria')
        .trim()
        .min(1, 'Debe escribir un tipo de categoria')
        .max(50, 'La categoria no debe tener mas de 50 caracteres'),

    marca: z
        .string('Ingreel nombre de la marca del producto')
        .trim()
        .min(1, 'Escriba la marca del producto')
        .max(50, 'El nombre de la marca no debe tener mas de 50 caracteres'),


    precio: z
        .number('El precio debe ser en numeros')
        .positive('El precio debe ser mayor que 0'),


    stock: z
        .number('Ingrese una cantidad de stock')
        .int('Debe ser un numero entero')
        .min(0, 'El stock no puede ser negativo'),

    estado: z
        .boolean('El estado debe ser Activo o Inactivo')
        .default(true)
})


const statusSchema = z.object({
    estado: z
        .boolean('El estado debe ser Activo o Inactivo')
})



export { createProductSchema, statusSchema, idSchema }
