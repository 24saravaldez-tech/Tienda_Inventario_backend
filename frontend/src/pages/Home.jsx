import { useContext } from 'react';
import { Tabla } from './Tabla';
import { Notification } from './notification';
import { ProductosContext } from '../context/context';
import { ProductForm } from './ProductForm';

function Home() {
    const { edicion, nuevoProducto, estaEditando, errorListado, aviso, setAviso } = useContext(ProductosContext);
    return (
        <main className="container py-4">
            <h1 className="mb-4">Inventario de la Tienda</h1>
            {aviso && <Notification message={aviso.message} color={aviso.color} onClose={() => setAviso(null)} />}
                {errorListado && <Notification message={errorListado} color={'danger'}/>}
            {!edicion && <button type="button" className="btn btn-primary mb-3" onClick={nuevoProducto}>Agregar nuevo producto</button>}
            {!edicion && <Tabla />}
            {edicion && <>
                <h2>{estaEditando ? 'Editar producto' : 'Crear producto'}</h2>
                <ProductForm />
            </>}
        </main>
    );
}

export { Home };
