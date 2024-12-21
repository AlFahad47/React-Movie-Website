import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'

function App() {


  return (

    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favorites' element={<Favorites/>} />
    </Routes>
    </div> 

  )
}

export default App
