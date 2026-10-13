import { apiClient } from './apiClient.js'

const getProducts = async () => {
    const response = await apiClient.get('/productos')
    return response.data.data
}

const getOneProduct = async (id) => {
    const response = await apiClient.get(`/productos/${id}`)
    return response.data.data
}

const createProduct = async (form) => {
    let data = {
        ...form,
        codigo: String(form.codigo).toUpperCase(),
        precio: Number(form.precio),
        stock: Number(form.stock),
        estado: form.estado == 'Activo' ? true : false
    }
    const response = await apiClient.post('/productos', data)
    return response.data
}


const updateProduct = async (id, form) => {

    let data = {
        ...form,
        codigo: String(form.codigo).toUpperCase(),
        precio: Number(form.precio),
        stock: Number(form.stock),
        estado: form.estado == 'Activo' ? true : false
    }

    const response = await apiClient.patch(`/productos/${id}/update`, data)
    return response.data
}


const updateProductsStatus = async (id, estado) => {
    const response = await apiClient.put(`/productos/${id}`, { estado: form.estado == 'Activo' ? true : false })
    return response.data
}


const deleteProduct = async (id) => {
    const response = await apiClient.delete(`/productos/${id}`)
    return response.data
}


export { getProducts, getOneProduct, createProduct, updateProduct, updateProductsStatus, deleteProduct, getApiError }