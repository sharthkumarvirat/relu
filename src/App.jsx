
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexMain from './Components/IndexMain'
import InsideApp from './Components/InsideApp'
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Foot from './Components/Foot'
import Logo from './Components/Logo'
import Photos from './Components/Photos'

function App() {
  return (
    <>
     <BrowserRouter basename='/'>
     <Routes>
      <Route path='/' element={<SignIn/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/main' element={<InsideApp/>}/>
     </Routes>
     </BrowserRouter>
      {/* <Foot/> */}
      {/* <Logo/> */}
      {/* <Photos/> */}
    </>
  )
}

export default App
