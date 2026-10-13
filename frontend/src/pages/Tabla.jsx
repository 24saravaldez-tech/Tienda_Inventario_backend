import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient'

function Tabla() {

    const [rows, setRows] = useState([])


    const getOneProduct = async (id) => {
        const response = await apiClient.get(`/productos/${id}`)
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

        const response = await apiClient.patch(`/productos/${id}/update`, data)
        return response.data
    }


    const updateProductsStatus = async (id, estado) => {
        const response = await apiClient.put(`/productos/${id}`, { estado: form.estado == 'Activo' ? true : false })
        return response.data
    }


    const deleteProduct = async (id) => {
        const response = await apiClient.delete(`/productos/${id}`)
        return response.data
    }


    const onEliminar = () => {
        //debe mostrar un modal
        console.log('confirmacion')
    }
    const onEditar = () => {
        //debe mostrar el formulario de edicion
        updateProduct()
    }
    const onVer = () => {
        //debe mostrar una pagina de detalles
        getOneProduct()
    }
    const onEstado = () => {
        //muestra antes el modal de confimacion antes de cambiar el estado
        updateProductsStatus()
    }

    const onConfirmar = (id) => {
        deleteProduct(id)
    }

    const getProducts = async () => {
        const response = await apiClient.get('/productos')

        let filas = {
            ...response.data.data,
            acciones: {
                eliminar: () => onEliminar(response.data.data.id_productos),
                editar: () => onEditar(response.data.data.id_productos),
                ver: () => onVer(response.data.data.id_productos),
                cambiarEstado: () => onEstado(response.data.data.id_productos)
            }
        }

        setRows(filas)
        return response.data.data
    }



    useEffect(() => {
        getProducts()
    }, [])


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
                        <td>{p.estado}</td>
                        <td>{p.acciones}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { Tabla };