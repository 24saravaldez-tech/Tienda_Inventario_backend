import React from 'react'
import { formSchema } from '../schemas/formSchema'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { apiClient } from '../api/apiClient';
import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ProductosContext } from '../context/context';


const ProductForm = () => {
    const { id_buscar, setIdBuscar, setEdicion } = useContext(ProductosContext)
    const navigate = useNavigate()

    const initialStateForm = {
        codigo: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        marca: '',
        precio: '',
        stock: '',
        estado: true
    }
    const [formulario, setFormulario] = useState(initialStateForm)

    //=====================================================================
    const getOneProduct = async (id) => {
        const response = await apiClient.get(`/${id}`)
        return response.data.data
    }

    const buscarProducto = async () => {

        try {
            const buscado = await getOneProduct(id_buscar)
            console.log('buscado', buscado)
            let nuevaData = {
                codigo: buscado.codigo,
                nombre: buscado.nombre,
                descripcion: buscado.descripcion,
                categoria: buscado.categoria,
                marca: buscado.marca,
                precio: buscado.precio,
                stock: buscado.stock,
                estado: buscado.estado
            }
            console.log('yo soy la nueva data: ', nuevaData)
            setFormulario(nuevaData)
            return nuevaData

        } catch (error) {
            return console.log(error)
        }

    }

    console.log(id_buscar, 'en formulario')

    if (id_buscar) {
        console.log('entro')
    //    buscarProducto()
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

    //=============================================================================


    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: formulario,
        resolver: zodResolver(formSchema)
    })
    console.log(formulario)

    const onSubmit = async (data) => {

        if (id_buscar == null || id_buscar == undefined) {
            try {
                await createProduct(data)
            } catch (error) {
                console.log(error)
            }

        } else {
            try {
                await updateProduct(id, data)
            } catch (error) {
                console.log(error)
            }

        }

        reset(initialStateForm)
        navigate('/')

    }

    console.log(watch())

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

                        <div className="col-md-6">
                            <Controller
                                name='Estado'
                                control={control}
                                render={({ field }) =>
                                (
                                    <>
                                        <label htmlFor="estado">Estado</label>
                                        <select
                                            id="estado"
                                            className={`form-control ${errors.estado ? 'is-invalid' : ''}`} {...field}>
                                            <option value="" disabled hidden>Selecciona una estado</option>
                                            <option value={true}>Activo</option>
                                            <option value={false}>Inactivo</option>

                                        </select>
                                        {errors.estado && (
                                            <div className="invalid-feedback">{estado.message}</div>
                                        )}
                                    </>
                                )
                                }
                            />

                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary" >{id_buscar != null || id_buscar != undefined ? 'Guardar Cambios' : 'Crear Producto'}</button>
                            <button type="button" className="btn btn-primary" onClick={() => { navigate('/'), setEdicion(false) }} >Cancelar</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export { ProductForm }