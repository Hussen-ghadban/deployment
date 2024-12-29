import './App.css'
import ProductList from './pages/ProductList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ProductList/>}/>
      <Route path='/add-product' element={<AddProduct/>}/>
      <Route path='/update-product/:id' element={<UpdateProduct/>}/>

    </Routes>

    </BrowserRouter>
  )
}

export default App
