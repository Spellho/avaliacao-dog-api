import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Random from './pages/Random'

export default function App() {
  return (
    <>
      <Header />
      <main id='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/random' element={<Random />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
