import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import { MovieProvider } from './contexts/MovieContext'

function App() {


  return (

    <MovieProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>} />
    </Routes>
    </MovieProvider> 

  )
}

export default App
