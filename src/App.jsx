
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Header'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Signin from './pages/Signin'

function App() {

  return (

    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'   element={<Home/>} />
        <Route  path='/about'   element={<About/>}   />
        <Route path='/products' element={<Products/>}   />
        <Route path='/signin'   element={<Signin/>}   />
      </Routes>
    </BrowserRouter>
  )
}

export default App
