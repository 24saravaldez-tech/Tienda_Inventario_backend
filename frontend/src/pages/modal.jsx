import { useContext, useEffect, useState } from 'react';
import { ProductosContext } from '../context/context';
import { Notification } from './notification';

function DeleteModal({ id }) {
    const { deleteProduct, setIdEliminar } = useContext(ProductosContext);
    const [error, setError] = useState('');

    const onCancel = () => {
        setIdEliminar(null);
    };

    const onEliminar = async () => {
        setError('');
        try {
            await deleteProduct(id)
            setIdEliminar(null)
        } catch (error) {
            const mensaje = error.response.data.message
            setError(mensaje)
        }
    };


    return (
        <>
            <div className="modal-backdrop fade show" />
            <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="eliminar">Eliminar producto</h5>
                            <button type="button" className="btn-close" aria-label="Cerrar modal" onClick={onCancel} autoFocus />
                        </div>
                        <div className="modal-body">
                            <p>Deseas eliminar el producto?</p>
                            <Notification message={error} color="danger" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
                            <button type="button" className="btn btn-danger" onClick={onEliminar}>Eliminar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function StatusModal({ id }) {
    const { getOneProduct, updateProductsStatus, setIdEstado } = useContext(ProductosContext);
    const [error, setError] = useState('');

    const onCancel = () => {
        setIdEstado(null)
    }

    const onEstado = async () => {
        setError('')
        try {
            const producto = await getOneProduct(id);
            await updateProductsStatus(id, producto.estado);
            setIdEstado(null)
        } catch (error) {
            const mensaje = error.response.data.message 
            setError(mensaje)
        }
    };



    return (
        <>
            <div className="modal-backdrop fade show" />
            <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="estado">Cambiar estado</h5>
                            <button type="button" className="btn-close" aria-label="Cerrar modal" onClick={onCancel} autoFocus />
                        </div>
                        <div className="modal-body">
                            <p>Desea cambiar el estado del producto?</p>
                            <Notification message={error} color="danger" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancelar</button>
                            <button type="button" className="btn btn-warning" onClick={onEstado}>Cambiar estado</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function DetailsModal({ producto, onCancel }) {

    return (
        <>
            <div className="modal-backdrop fade show" />
            <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="detalles">Detalles del producto</h5>
                            <button type="button" className="btn-close" aria-label="Cerrar modal" onClick={onCancel} autoFocus />
                        </div>
                        <div className="modal-body">
                            <p><strong>Código:</strong> {producto.codigo}</p>
                            <p><strong>Nombre:</strong> {producto.nombre}</p>
                            <p><strong>Descripción:</strong> {producto.descripcion || 'Sin descripción'}</p>
                            <p><strong>Categoría:</strong> {producto.categoria}</p>
                            <p><strong>Marca:</strong> {producto.marca}</p>
                            <p><strong>Precio:</strong> {producto.precio}</p>
                            <p><strong>Stock:</strong> {producto.stock}</p>
                            <p><strong>Estado:</strong> {producto.estado == true ? 'Activo' : 'Inactivo'}</p>
                            <p><strong>Fecha de creación:</strong> {producto.fecha_creacion}</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCancel}>Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export { DeleteModal, StatusModal, DetailsModal };
