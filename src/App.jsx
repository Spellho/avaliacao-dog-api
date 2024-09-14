import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Cachorros from './pages/Cachorros'

export default function App() {
  return (
    <>
      <Header />
      <main id='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/cachorros' element={<Cachorros />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
