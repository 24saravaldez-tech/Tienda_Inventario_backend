import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient'



const deleteProduct = async (id) => {
    const response = await apiClient.delete(`/${id}`)
    return response.data
}

const updateProductsStatus = async (id, estado) => {
    const response = await apiClient.put(`/${id}`, { estado: form.estado == 'Activo' ? true : false })
    return response.data
}


const modalEliminar = (id) => {
    // const navigate = useNavigate()

    // const cancelar = () => {
    //     navigate('/')
    // }

    return (
        <>
            <div className="toast theme-accent" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">

                    <strong className="me-auto">Confirmacion de accion</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Desea eliminar este producto?
                    <div className="hstack gap-2 mt-2">
                        <button type="button" className="btn-solid btn-sm" onClick={() => deleteProduct(id)}>Eliminar</button>
                        <button type="button" className="btn-solid theme-secondary btn-sm" data-bs-dismiss="toast" onClick={() => cancelar()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const modalCambiarEstado = (id) => {
    //const navigate = useNavigate()



    // const cancelar = () => {
    //     navigate('/')
    // }

    const confirmar = (id) => {
        updateProductsStatus(id)
    }


    return (
        <>
            <div className="toast theme-primary" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">

                    <strong className="me-auto">Cambiar estado</strong>
                    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div className="toast-body">
                    Desea cambiar el estado de este producto?
                    <div className="hstack gap-2 mt-2">
                        <button type="button" className="btn-solid btn-sm" onClick={() => confirmar()}>Confirmar</button>
                        <button type="button" className="btn-solid theme-secondary btn-sm" data-bs-dismiss="toast" onClick={() => cancelar()}>Cancelar</button>
                    </div>
                </div>
            </div>
        </>
    )
}





function Tabla(filas) {

    const [rows, setRows] = useState([])

    const getProducts = async () => {
        const response = await apiClient.get('/')
        setRows(response.data.data)

        return response.data.data
    }

    useEffect(() => {
        getProducts()
    }, [])

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
        const response = await apiClient.put(`/${id}`, { estado: form.estado == 'Activo' ? true : false })
        return response.data
    }


    const deleteProduct = async (id) => {
        const response = await apiClient.delete(`/${id}`)
        return response.data
    }


    const onEliminar = (id) => {
        modalEliminar(id)

        useEffect(() => {
            getProducts()
        }, [])
    }
    const onEditar = (id, codigo, nombre, descripcion, categoria, marca, precio, stock, estado) => {
        //debe mostrar el formulario de edicion
        updateProduct(id)
        // refresh()
    }
    const onVer = () => {
        //debe mostrar una pagina de detalles
        getOneProduct(id)
    }
    const onEstado = (id) => {
        //muestra antes el modal de confimacion antes de cambiar el estado
        modalCambiarEstado(id)

        useEffect(() => {
            getProducts()
        }, [])
        // updateProductsStatus(id)
        //refresh()
    }

    const onConfirmar = (id) => {
        deleteProduct(id)
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
                            <button className="btn btn-info" onClick={() => onEditar(p.id_productos, p.codigo, p.nombre, p.categoria, p.precio, p.stock, p.estado)}>Editar</button>
                            <button className="btn btn-danger" onClick={() => onEliminar(p.id_productos)}>Eliminar</button>
                            <button className="btn btn-warning" onClick={() => onEstado(p.id_productos)}> {`${p.estado == true ? 'Inactivar' : 'Activar'}`}</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export { Tabla };