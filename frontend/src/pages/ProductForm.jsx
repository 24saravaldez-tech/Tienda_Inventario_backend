import React from 'react'

function ProductForm(id = null) {

    return (
        <>
            <div style={{ width: '100vw', height: '100vh' }} >

                <h2 className='m-4 p-4'>productForm</h2>

                <div className='d-flex-column justify-content-center align-content-center' style={{ width: '60%', height: '75%' }}>

                    <form className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="codigo" className="form-label">Codigo del Producto</label>
                            <input type="code" className="form-control" id="codigoInput" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputPassword4" className="form-label">Nombre</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress" className="form-label">Categoria</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Descripcion</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Marca</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputAddress2" className="form-label">Precio</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputCity" className="form-label">Stock</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">{id != null || id != undefined ? 'Guardar Cambios' : 'Crear Producto'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export { ProductForm }