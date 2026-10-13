import { Tabla } from "./Tabla";
import { apiClient } from "../api/apiClient";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div className="d-flex-column justify-content-center">

            <h1 className="d-flex m-4 p-4 justify-content-center">Inventario de la Tienda</h1>
            <button className="btn btn-light" onClick={() => navigate('/form')}>Agregar nuevo producto</button>
            <Tabla />

        </div>
    )
}

export { Home }
