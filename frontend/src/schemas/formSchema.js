import { z } from 'zod'

const formSchema = z.object({
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
        .string()
        .regex(/^\d+(\.\d+)?$/, "El precio debe contener solo números enteros")
        //las expresiones regulares fueron investigadas :/
    // .number('El precio debe ser en numeros')
    // .positive('El precio debe ser mayor que 0'),

    ,
    stock: z
        .string()
        .regex(/^\d+$/, "El stock debe contener solo números enteros")
    // .number('Ingrese una cantidad de stock')
    // .int('Debe ser un numero entero')
    // .min(0, 'El stock no puede ser negativo'),
    ,
    estado: z
        .boolean('El estado debe ser Activo o Inactivo')
})

export { formSchema }