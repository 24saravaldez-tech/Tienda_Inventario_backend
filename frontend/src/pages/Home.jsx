import { Tabla } from "./Tabla";
import { apiClient } from "../api/apiClient";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "./ProductForm";
import { useContext } from "react";
import { ProductosContext } from "../context/context";

function Home() {
    const navigate = useNavigate();
    const { edicion, id_buscar } = useContext(ProductosContext)


    return (
        <div className="d-flex-column justify-content-center">

            <h1 className="d-flex m-4 p-4 justify-content-center">Inventario de la Tienda</h1>
            <button className="btn btn-light" onClick={() => navigate('/form')}>Agregar nuevo producto</button>
            <Tabla />

            {edicion && <ProductForm id={id_buscar} />}


        </div>
    )
}

export { Home }
