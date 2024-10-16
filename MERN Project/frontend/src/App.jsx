import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Navbar from './Pages/Navbar'
import Contact from './Pages/Contact'
import Services from './Pages/Services'

function App() {
  return (
    <>
      <BrowserRouter>
    <Navbar/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
    {/* <Footer /> */}
      </BrowserRouter>
    </>
  )
}

export default App
