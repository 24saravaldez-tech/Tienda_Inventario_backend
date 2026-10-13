import { Tabla } from "./Tabla";

const productos = [
    {
        id_productos: 1,
        codigo: "PROD-001",
        nombre: "Teclado mecánico",
        categoria: "Accesorios",
        precio: 350.00,
        stock: 25,
        estado: "Activo"
    },
    {
        id_productos: 2,
        codigo: "PROD-002",
        nombre: "Mouse inalámbrico",
        categoria: "Accesorios",
        precio: 125.50,
        stock: 40,
        estado: "Activo"
    },
    {
        id_productos: 3,
        codigo: "PROD-003",
        nombre: "Monitor LED 24 pulgadas",
        categoria: "Monitores",
        precio: 1450.00,
        stock: 12,
        estado: "Activo"
    },
    {
        id_productos: 4,
        codigo: "PROD-004",
        nombre: "Laptop Lenovo",
        categoria: "Computadoras",
        precio: 5200.00,
        stock: 8,
        estado: "Activo"
    },
    {
        id_productos: 5,
        codigo: "PROD-005",
        nombre: "Cable HDMI",
        categoria: "Cables",
        precio: 65.00,
        stock: 0,
        estado: "Inactivo"
    },
    {
        id_productos: 6,
        codigo: "PROD-006",
        nombre: "Memoria USB 64 GB",
        categoria: "Almacenamiento",
        precio: 85.00,
        stock: 30,
        estado: "Activo"
    },
    {
        id_productos: 7,
        codigo: "PROD-007",
        nombre: "Disco SSD 1 TB",
        categoria: "Almacenamiento",
        precio: 650.00,
        stock: 15,
        estado: "Activo"
    },
    {
        id_productos: 8,
        codigo: "PROD-008",
        nombre: "Webcam HD",
        categoria: "Accesorios",
        precio: 275.00,
        stock: 5,
        estado: "Activo"
    },
    {
        id_productos: 9,
        codigo: "PROD-009",
        nombre: "Impresora multifuncional",
        categoria: "Impresoras",
        precio: 980.00,
        stock: 3,
        estado: "Activo"
    },
    {
        id_productos: 10,
        codigo: "PROD-010",
        nombre: "Audífonos Bluetooth",
        categoria: "Audio",
        precio: 225.00,
        stock: 18,
        estado: "Inactivo"
    }
];

function Home() {

    return (
        <div className="d-flex-column justify-content-center">

            <h1 className="d-flex m-4 p-4 justify-content-center">Inventario de la Tienda</h1>
            <button className="btn btn-light">Agregar nuevo producto</button>
            <Tabla productos={productos} />

        </div>
    )
}

export { Home }
