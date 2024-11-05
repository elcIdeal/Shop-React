import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import {Navbar} from './componnents/navbar'
import {Shop} from './pages/shop/shop'
import {Cart} from './pages/cart/cart'
import { ShopContextProvider } from './context/shop-context'
const App = () => {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App