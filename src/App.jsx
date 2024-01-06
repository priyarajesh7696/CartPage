import React from 'react'
import Carts from './components/Carts'
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import ProductContextComponents from './utils/ProductContextComponents'

function App() {
  return <>
    <BrowserRouter>
    <Routes>
    <Route path='/carts' element={
        <ProductContextComponents>
          <Carts/>
        </ProductContextComponents>}>
        <Route path='*' element={<Navigate to='/carts'/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
   
    
  </>
}

export default App