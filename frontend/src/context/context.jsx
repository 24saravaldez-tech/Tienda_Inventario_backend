import { useState } from "react";
import { createContext } from "react";

const ProductosContext = createContext()

function ProductosProvider({ children }) {
    const [id_buscar, setIdBuscar] = useState(null)
    const [edicion, setEdicion] = useState(false)

    return (
        <ProductosContext.Provider value={{
            id_buscar, 
            setIdBuscar,
            edicion,
            setEdicion
        }}>
            {children}
        </ProductosContext.Provider>
    )
}

export { ProductosContext, ProductosProvider }