import React from 'react'
import { formSchema } from '../schemas/formSchema'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { apiClient } from '../api/apiClient';
import { useNavigate } from "react-router-dom";



function ProductForm(id = null) {
    const navigate = useNavigate()

    const initialStateForm = {
        codigo: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        marca: '',
        precio: '',
        stock: ''
    }

    const { formulario, setFormulario } = useState(initialStateForm)



    const getOneProduct = async (id) => {
        const response = await apiClient.get(`/${id}`)
        return response.data.data
    }

    const updateProduct = async (id, form) => {

        let data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            precio: Number(form.precio),
            stock: Number(form.stock),
            estado: form.estado == 'Activo' ? true : false
        }

        const response = await apiClient.patch(`/${id}/update`, data)
        return response.data
    }


    const createProduct = async (form) => {
        console.log('crear')
        let data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            precio: Number(form.precio),
            stock: Number(form.stock),
            estado: form.estado == 'Activo' ? true : false
        }
        const response = await apiClient.post('/', data)
        return response.data
    }



    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialStateForm,
        resolver: zodResolver(formSchema)
    })

    const onSubmit = async (data) => {

        console.log('si entre')

        // if (id != null && id != undefined) {
        //     await updateProduct(id, data)
        //     console.log('en edicion')


        // } else {

        try {
            await createProduct(data)
            console.log('en creacion')
        } catch (error) {
            console.log(error)
        }



        navigate('/')
    }

    // const saludo = () => {
    //     console.log('hola')
    //     navigate('/')

    // }

    return (
        <>
            <div style={{ width: '100vw', height: '100vh' }} >

                <h2 className='m-4 p-4'>productForm</h2>

                <div className='d-flex-column justify-content-center align-content-center' style={{ width: '60%', height: '75%' }}>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6">

                            <Controller
                                name='codigo'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="codigo">Codigo <span className="text-danger">*</span></label>
                                        <input
                                            id='codigo'
                                            placeholder="Codigo del producto"
                                            name='codigo'
                                            className={`form-control ${errors.codigo ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.nombres && (
                                            <div className="invalid-feedback">
                                                {errors.codigo.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />

                        </div>

                        <div className="col-md-6">
                            <Controller
                                name='nombre'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="nombre">Nombre <span className="text-danger">*</span></label>
                                        <input
                                            id='nombre'
                                            placeholder="Nombre del producto"
                                            name='nombre'
                                            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.nombre && (
                                            <div className="invalid-feedback">
                                                {errors.nombre.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />
                        </div>
                        <div className="col-12">
                            <Controller
                                name='categoria'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="categoria">categoria <span className="text-danger">*</span></label>
                                        <input
                                            id='categoria'
                                            placeholder="categoria del producto"
                                            name='categoria'
                                            className={`form-control ${errors.categoria ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.categoria && (
                                            <div className="invalid-feedback">
                                                {errors.categoria.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />

                        </div>
                        <div className="col-12">
                            <Controller
                                name='descripcion'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="descripcion">Descripcion</label>
                                        <textarea
                                            id='descripcion'
                                            placeholder="descripcion del producto"
                                            name='descripcion'
                                            className={`form-control ${errors.descripcion ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.descripcion && (
                                            <div className="invalid-feedback">
                                                {errors.descripcion.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />


                        </div>
                        <div className="col-md-6">
                            <Controller
                                name='marca'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="marca">Marca <span className="text-danger">*</span></label>
                                        <input
                                            id='marca'
                                            placeholder="Marca del producto"
                                            name='marca'
                                            className={`form-control ${errors.marca ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.marca && (
                                            <div className="invalid-feedback">
                                                {errors.marca.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />


                        </div>
                        <div className="col-12">
                            <Controller
                                name='precio'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="precio">precio <span className="text-danger">*</span></label>
                                        <input
                                            id='precio'
                                            placeholder="precio del producto"
                                            name='precio'
                                            className={`form-control ${errors.precio ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.precio && (
                                            <div className="invalid-feedback">
                                                {errors.precio.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />


                        </div>
                        <div className="col-md-6">
                            <Controller
                                name='stock'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="stock">stock <span className="text-danger">*</span></label>
                                        <input
                                            id='stock'
                                            placeholder="stock del producto"
                                            name='stock'
                                            className={`form-control ${errors.stock ? 'is-invalid' : ''}`} {...field}
                                        />
                                        {errors.stock && (
                                            <div className="invalid-feedback">
                                                {errors.stock.message}
                                            </div>
                                        )}
                                    </>
                                )
                                }
                            />

                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" >{id != null || id != undefined ? 'Guardar Cambios' : 'Crear Producto'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export { ProductForm }