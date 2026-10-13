import React, { useEffect } from 'react'
import { formSchema } from '../schemas/formSchema'
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { apiClient } from '../api/apiClient';
import { data, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { ProductosContext } from '../context/context';


const ProductForm = () => {
    const {
        id_buscar,
        setIdBuscar,
        setEdicion,
        formulario,
        buscarProducto,
        estaEditando,
        setEstaEditando,
        initialState,
        createProduct,
        updateProduct } = useContext(ProductosContext)

    const navigate = useNavigate()

    if (id_buscar) {
        buscarProducto()
    }

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


    const onSubmit = async (data) => {

        if (estaEditando == true) {
            await createProduct(data)
        }

        if (estaEditando == false) {
            console.log('estaoy editando')
            await updateProduct(id_buscar, data)
        }

        setEdicion(false)
        setEstaEditando(false)
        reset()
        setIdBuscar(null)
        navigate('/')

    }


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
                            <button type="submit" className="btn btn-primary" >{estaEditando == false || estaEditando == null ? 'Guardar Cambios' : 'Crear Producto'}</button>
                            <button type="button" className="btn btn-primary" onClick={() => { navigate('/'), setEdicion(false) }} >Cancelar</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export { ProductForm }