import { Tabla } from "./Tabla";
import { apiClient } from "../api/apiClient";
import { useState } from "react";
import { useEffect } from "react";

function Home() {

    return (
        <div className="d-flex-column justify-content-center">

            <h1 className="d-flex m-4 p-4 justify-content-center">Inventario de la Tienda</h1>
            <button className="btn btn-light">Agregar nuevo producto</button>
            <Tabla />

        </div>
    )
}

export { Home }
