import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Team from './pages/Team'
import Projects from './pages/Projects'
import Documents from './pages/Documents'
function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Sidebar/> */}
      <Routes>
        <Route path='/' element={<Home/>}  >
           <Route path='modal' element={<Modal/>}/>
           </Route>
        <Route path='calendar' element={<Calendar/>}/>
        <Route path='team' element={<Team/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='documents' element={<Documents/>}/>
        <Route path='sidebar' element={<Sidebar/>}/>
       

       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
