import { useContext, useState } from 'react';
import { ProductosContext } from '../context/context';
import { DeleteModal, StatusModal, DetailsModal } from './modal';
import { Notification } from './notification';

function Tabla() {
    const { rows,
        errorListado,
        getProducts,
        buscarProducto,
        getOneProduct,
        idEliminar,
        setIdEliminar,
        idEstado,
        setIdEstado,
        notificar } = useContext(ProductosContext)
    const [detalle, setDetalle] = useState(null)

    const onEditar = async (id) => {
        try {
            await buscarProducto(id)
        } catch (error) {
            const mensaje = error.response?.data?.message || 'No se pudo conectar con la API.'
            notificar(mensaje, 'danger')
        }
    }

    const onDetalles = async (id) => {
        try {
            setDetalle(await getOneProduct(id))
        } catch (error) {
            const mensaje = error.response?.data?.message || 'No se pudo conectar con la API.'
            notificar(mensaje, 'danger')
        }
    };



    return (
        <>
            {rows.length === 0 ? <p className="alert alert-info">No hay productos registrados. Agrega un nuevo producto para comenzar.</p> : (
                <div className="table-responsive">
                    <table className="table table-striped align-middle">
                        <thead><tr>
                            <th scope="col">Código</th><th scope="col">Nombre</th><th scope="col">Categoría</th>
                            <th scope="col">Precio</th><th scope="col">Stock</th><th scope="col">Estado</th><th scope="col">Acciones</th>
                        </tr></thead>
                        <tbody>{rows.map(p => (
                            <tr key={p.id_productos}>
                                <th scope="row">{p.codigo}</th><td>{p.nombre}</td><td>{p.categoria}</td>
                                <td>{Number(p.precio).toFixed(2)}</td><td>{p.stock}</td><td>{p.estado ? 'Activo' : 'Inactivo'}</td>
                                <td><div className="d-flex flex-wrap gap-2">
                                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => onDetalles(p.id_productos)}>Detalles</button>
                                    <button type="button" className="btn btn-info btn-sm" onClick={() => onEditar(p.id_productos)}>Editar</button>
                                    <button type="button" className="btn btn-danger btn-sm" onClick={() => setIdEliminar(p.id_productos)}>Eliminar</button>
                                    <button type="button" className="btn btn-warning btn-sm" onClick={() => setIdEstado(p.id_productos)}>{p.estado ? 'Inactivar' : 'Activar'}</button>
                                </div></td>
                            </tr>
                        ))}</tbody>
                    </table>
                </div>
            )}
            {detalle && <DetailsModal producto={detalle} onCancel={() => setDetalle(null)} />}
            {idEliminar && <DeleteModal id={idEliminar} />}
            {idEstado && <StatusModal id={idEstado} />}
        </>
    );
}

export { Tabla };
