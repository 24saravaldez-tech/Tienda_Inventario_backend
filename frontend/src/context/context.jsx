import { useState } from "react";
import { createContext } from "react";
import { apiClient } from '../api/apiClient';


const ProductosContext = createContext()

function ProductosProvider({ children }) {
    const [id_buscar, setIdBuscar] = useState(null)
    const [edicion, setEdicion] = useState(false)
    const [estaEditando, setEstaEditando] = useState(null)



    let initialStateForm = {
        codigo: '',
        nombre: '',
        descripcion: '',
        categoria: '',
        marca: '',
        precio: '',
        stock: '',
        estado: true
    }

    const [formulario, setFormulario] = useState(initialStateForm)

    const getOneProduct = async (id) => {
        const response = await apiClient.get(`/${id}`)
        return response.data.data
    }



    const buscarProducto = async () => {
        try {
            const buscado = await getOneProduct(id_buscar)
            let nuevaData = {
                codigo: buscado.codigo,
                nombre: buscado.nombre,
                descripcion: buscado.descripcion,
                categoria: buscado.categoria,
                marca: buscado.marca,
                precio: buscado.precio,
                stock: buscado.stock,
                estado: buscado.estado
            }

            setFormulario(nuevaData)
            setIdBuscar(null)
            setEstaEditando(true)
            return nuevaData

        } catch (error) {
            return console.log(error)
        }

        buscarProducto()
    }


    const updateProduct = async (id, form) => {
        console.log('lo que viene en actualizar', form)
        setEstaEditando(true)

        let data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            stock: String(form.stock),
            estado: form.estado == 'Activo' ? true : false
        }

        try {
            const response = await apiClient.patch(`/${id}/update`, data)
        } catch (error) {
            console.log(error)
        }

        setEdicion(false)
        reset(initialState)
        return response.data
    }


    const createProduct = async (form) => {
        console.log('lo que viene a crear')
        let data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            stock: String(form.stock),
            estado: form.estado == 'Activo' ? true : false
        }
        const response = await apiClient.post('/', data)
        setEdicion(false)
        reset(initialState)
        return response.data
    }



    return (
        <ProductosContext.Provider value={{
            id_buscar,
            setIdBuscar,
            edicion,
            setEdicion,
            formulario,
            buscarProducto,
            setEstaEditando,
            estaEditando,
            initialStateForm,
            updateProduct,
            createProduct
        }}>
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosContext, ProductosProvider }