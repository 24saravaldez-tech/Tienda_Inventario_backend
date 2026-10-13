import { apiClient } from "../../api/apiClient";
import { createAsyncThunk } from "@reduxjs/toolkit";


//productsRoutes.get('/', getAllProducts)

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (_, { rejectWithValue }) => {
        try {
            const allProducts = await apiClient.get('/')
            return allProducts.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al obtener los productos')
        }
    }
)

//productsRoutes.get('/:id', getOneProduct)

export const getOneproduct = createAsyncThunk(
    'products/getOneProduct',
    async (id, { rejectWithValue }) => {
        try {
            const product = await apiClient.get(`/${id}`)
            return product.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al obtener el producto deseado')
        }
    }
)

//productsRoutes.put('/:id', putMIddlwware, updateProductsStatus)

export const updateProductsStatus = createAsyncThunk(
    'products/updateProductsStatus',
    async (info, { rejectWithValue }) => {

        let data = {
            estado: info.estado == 'Activo' ? true : false
        }

        try {
            const product = await apiClient.put(`/${info.id}`, data)
            return product.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al intentar cambiar el estado del producto')
        }
    }
)


//productsRoutes.post('/', postPatchMiddlware, createProduct)


export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (form, { rejectWithValue }) => {

        const data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            estado: true
        }

        try {
            const newProduct = await apiClient.post('/', data)
            return newProduct.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al intentar crear este producto')
        }
    }
)

//productsRoutes.patch('/:id/update', postPatchMiddlware, updateProduct)


export const updateProduct = createAsyncThunk(
    'products/updateProduct',
    async (form, { rejectWithValue }) => {
        const data = {
            ...form,
            codigo: String(form.codigo).toUpperCase(),
            estado: form.estado == 'Activo' ? true : false
        }

        try {
            const editedProduct = await apiClient.patch(`/${form.id}/update`)
            return editedProduct.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al actualizar el productos')
        }
    }
)


//productsRoutes.delete('/:id', deleteProduct)


export const deleteProduct = createAsyncThunk(
    'products/deleteProduct',
    async (id, { rejectWithValue }) => {
        try {
            const eliminado = await apiClient.get(`/${id}`)
            return eliminado.data.data
        } catch (error) {
            return rejectWithValue(error.data.message || 'Hubo un error al eliminar el producto')
        }
    }
)