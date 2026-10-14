import { useNavigate } from "react-router-dom"

const NotFountPage = () => {
    const navigate = useNavigate()
    
    return (
        <>
            <h2>No Pagina no Encontrada.</h2>
            <button type="button" className="btn btn-primary mb-3" onClick={() => navigate('/')}>Volver al Inicio</button>
        </>
    )
}

export { NotFountPage }