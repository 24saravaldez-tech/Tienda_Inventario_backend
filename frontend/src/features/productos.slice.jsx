import { createSlice } from '@reduxjs/toolkit'
import { getProducts } from './productos.thunk'

const initalState = {
    allProducts: [],
    loading: false,
    error: false,
    message: '',
    initalStateForm: {
        codigo: '',
        nombre: '',
        categoria: '',
        marca: '',
        stock: '',
        precio: '',
        descripcion: '',
        estado: true
    }
}


const productsSlice = createSlice({
    name: 'products',
    initalState,
    reducers: {
        setEditarProducto: (state, action) => { state.initalStateForm = action.payload },
        setEditarEstado: (state, action) => { state.initalState.estado = action.payload },
        setCanceral: (state, action) => {
            state.initalStateForm = {
                codigo: '',
                nombre: '',
                categoria: '',
                marca: '',
                stock: '',
                precio: '',
                descripcion: '',
                estado: true
            }
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.loading = true
                state.error = false
            })

            .addCase(getProducts.fulfilled, (state, action) => {
                state.loading = false
                state.error = false
                state.allProducts = action.payload
            })

            .addCase(getProducts.rejected, (state, action) => {
                state.loading = false
                state.error = true
                state.allProducts = []
                state.message = action.payload
            })
    }
})

export { productsSlice }