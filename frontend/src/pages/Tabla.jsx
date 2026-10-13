import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient'
import { NavLink, useNavigate } from 'react-router-dom';
import { ProductForm } from './ProductForm.jsx';
import { useContext } from 'react';
import { ProductosContext } from '../context/context.jsx';


function Tabla(filas) {
    const navigate = useNavigate()
    const [rows, setRows] = useState([])
    const {id_buscar, setIdBuscar, setEdicion} = useContext(ProductosContext)

    useEffect(() => {
        getProducts()
    }, [])


    //llamadas api
    //=====================================================================================
    const getProducts = async () => {
        const response = await apiClient.get('/')
        setRows(response.data.data)
        return response.data.data
    }


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


    const updateProductsStatus = async (id, estado) => {
        const response = await apiClient.put(`/${id}`, { estado: estado == 'Activo' ? false : true })
        return response.data
    }


    const deleteProduct = async (id) => {
        const response = await apiClient.delete(`/${id}`)
        return response.data
    }

    //================================================================================================


    const onEliminar = async (id) => {
        try {
            const eliminar = await deleteProduct(id)
        } catch (error) {
            console.log(error)
        }
        getProducts()
    }


    const onEditar = () => {
        setEdicion(true)
        navigate('/form')
    }


    const onEstado = async (id, estado) => {
        try {
            const cambio = await updateProductsStatus(id, estado)
            getProducts()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <table className="table table-striped-columns">
            <thead>
                <tr>
                    <th scope="col">Codigo</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {rows.map(p => (
                    <tr key={p.id_productos}>
                        <th scope="row">{p.id_productos}</th>
                        <td>{p.nombre}</td>
                        <td>{p.categoria}</td>
                        <td>{p.precio}</td>
                        <td>{p.stock}</td>
                        <td>{p.estado == true ? 'Activo' : 'Inactivo'}</td>
                        <td>
                            <button className="btn btn-info"
                                onClick={() => {
                                    onEditar(p.id_productos)
                                    setIdBuscar(p.id_productos)
                                }}
                            >Editar</button>
                            <button className="btn btn-danger" onClick={() => onEliminar(p.id_productos)}>Eliminar</button>
                            <button className="btn btn-warning" onClick={() => onEstado(p.id_productos, p.estado)}> {`${p.estado == true ? 'Inactivar' : 'Activar'}`}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { Tabla };