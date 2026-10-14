import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductForm } from './pages/ProductForm';
import { NotFountPage } from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/form' element={<ProductForm />} />
                <Route path="*" element={<NotFountPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
