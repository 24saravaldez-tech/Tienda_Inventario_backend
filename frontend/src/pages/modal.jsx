import { useNavigate } from "react-router-dom"
import { apiClient } from "../api/apiClient.js"



function modalEliminar(id) {
    // const navigate = useNavigate()

    // const cancelar = () => {
    //     navigate('/')
    // }

    const deleteProduct = async (id) => {
        const response = await apiClient.delete(`/${id}`)
        return response.data
    }


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


function modalCambiarEstado(id){
    //const navigate = useNavigate()

    const updateProductsStatus = async (id, estado) => {
        const response = await apiClient.put(`/${id}`, { estado: form.estado == 'Activo' ? true : false })
        return response.data
    }


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

export { modalCambiarEstado, modalEliminar }