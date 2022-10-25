import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
  
   <Routes>
      <Route path='/' element={<Home/>}>
          <Route path='/sidebar' element={<Sidebar />}/>
          <Route path='modal' element={<Modal/>}/>
      </Route> 

      {/* <Route path='/team' element={<Home/>}/>

      <Route path='/' element={<Home/>}/>

      // <Route path='/' element={<Home/>}/> */}


   </Routes>
   
   
   
   </BrowserRouter>

      
   
  )
}

export default App