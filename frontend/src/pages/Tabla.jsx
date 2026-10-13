import { useDispatch } from 'react-redux'
import { getProducts } from '../features/productos.thunk';
import { useEffect, useState } from 'react';

function Tabla() {
    const dispatch = useDispatch()
    const [rows, setRows] = useState()

    useEffect(() => {
        handlerObternerProductos()
    }, [])

    const handlerObternerProductos = async () => {
        try {
            let response = await dispatch(getProducts()).unwrap()

            let productos = response.map((p) => ({
                id_productos: p.id_productos,
                codigo: p.codigo,
                nombre: p.nombre,
                categoria: p.categoria,
                precio: p.precio,
                stock: p.stock,
                estado: p.estado,
                acciones: {

                }
            }))

            setRows(productos)

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
                    <tr key={p.id}>
                        <th scope="row">{p.id}</th>
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