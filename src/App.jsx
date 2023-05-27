
import './App.css'
import Home from './Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import SMovie from './SMovie'
import Error from './Error'

function App() {
 

  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="movie/:id" element={<SMovie/>}/>
    <Route path="*" element={<Error/>}/>
   </Routes>
   
   </BrowserRouter> 
    </>
  )
}

export default App
