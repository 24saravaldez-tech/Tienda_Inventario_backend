import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ProductosProvider } from './context/context.jsx'

createRoot(document.getElementById('root')).render(
    <ProductosProvider>
        <App />
    </ProductosProvider>
)
