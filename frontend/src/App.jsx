
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home'
import { ProductForm } from './pages/ProductForm'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<ProductForm />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
