import { createContext, useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const ProductosContext = createContext();

const initialStateForm = {
    codigo: '',
    nombre: '',
    descripcion: '',
    categoria: '',
    marca: '',
    precio: '',
    stock: '',
    estado: true
};

function ProductosProvider({ children }) {
    const [rows, setRows] = useState([])
    const [id_buscar, setIdBuscar] = useState(null)
    const [edicion, setEdicion] = useState(false)
    const [estaEditando, setEstaEditando] = useState(false)
    const [formulario, setFormulario] = useState(initialStateForm)
    const [aviso, setAviso] = useState(null)
    const [errorListado, setErrorListado] = useState('')
    const [idEliminar, setIdEliminar] = useState(null)
    const [idEstado, setIdEstado] = useState(null)


    useEffect(() => {
        apiClient.get('/')
            .then(response => setRows(response.data.data))
            .catch(error => {
                const mensaje = error.response?.data?.message || 'No se pudo conectar con la API. Revisa que el backend esté encendido.'
                setErrorListado(mensaje)
            });
    }, [])

    const notificar = (message, color = 'success') => {
        setAviso({ message, color })
    }

    const getProducts = async () => {
        try {
            const response = await apiClient.get('/')
            setRows(response.data.data)
            setErrorListado('')
        } catch (error) {
            const mensaje = error.response?.data?.message || 'No se pudo conectar con la API. Revisa que el backend esté encendido.'
            setErrorListado(mensaje)
        }
    }

    const cerrarFormulario = () => {
        setEdicion(false);
        setEstaEditando(false);
        setIdBuscar(null);
        setFormulario({ ...initialStateForm })
    }

    const nuevoProducto = () => {
        setAviso(null);
        setIdBuscar(null);
        setEstaEditando(false);
        setFormulario({ ...initialStateForm })
        setEdicion(true);
    }

    const getOneProduct = async (id) => {
        const response = await apiClient.get(`/${id}`)
        return response.data.data
    }

    const buscarProducto = async (id) => {
        const producto = await getOneProduct(id)
        setIdBuscar(id)
        setEstaEditando(true)
        setFormulario({
            codigo: producto.codigo,
            nombre: producto.nombre,
            descripcion: producto.descripcion || '',
            categoria: producto.categoria,
            marca: producto.marca,
            precio: String(producto.precio),
            stock: String(producto.stock),
            estado: producto.estado
        })
        setAviso(null)
        setEdicion(true)
    }

    const prepararDatos = (form) => {
        return {
            ...form,
            codigo: form.codigo.trim().toUpperCase(),
            precio: Number(form.precio),
            stock: Number(form.stock),
            estado: form.estado
        }
    }

    const createProduct = async (form) => {
        const response = await apiClient.post('/', prepararDatos(form))
        setRows(actuales => [...actuales, response.data.data])
        cerrarFormulario()
        notificar(response.data.message)
    }

    const updateProduct = async (id, form) => {
        const response = await apiClient.patch(`/${id}/update`, prepararDatos(form))

        setRows(filas => filas.map(p => p.id_productos == id ? response.data.data : p))
        cerrarFormulario()
        notificar(response.data.message)
    }

    const updateProductsStatus = async (id, estado) => {
        const response = await apiClient.put(`/${id}`, { estado: !estado })
        setRows(filas => filas.map(p => p.id_productos == id ? response.data.data : p))
        notificar(response.data.message)
    }

    const deleteProduct = async (id) => {
        const response = await apiClient.delete(`/${id}`);
        setRows(filas => filas.filter(p => p.id_productos != id));
        notificar(response.data.message)
    }

    return (
        <ProductosContext.Provider value={{
            rows, 
            getProducts, 
            errorListado,
            id_buscar, 
            edicion, 
            estaEditando, 
            formulario, 
            setFormulario,
            nuevoProducto, 
            buscarProducto, 
            cerrarFormulario,
            getOneProduct, 
            createProduct, 
            updateProduct, 
            updateProductsStatus, 
            deleteProduct,
            aviso, 
            setAviso, 
            notificar,
            idEliminar,
            setIdEliminar,
            idEstado,
            setIdEstado
        }}>
            {children}
        </ProductosContext.Provider>
    );
}

export { ProductosContext, ProductosProvider }
