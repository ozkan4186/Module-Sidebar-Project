import React, { useContext } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Home = () => {
  
  
  const navigate=useNavigate()
  const [open, setOpen] = useState(false)
  return (
    <div>
     <h1>HOME COMPONENT</h1>
      {!open &&  <i onClick={()=>setOpen(!open)} > <FaBars/> </i> }
   {open && <Sidebar open={open} setOpen={setOpen}  /> }  
   <button onClick={(()=>navigate("modal"))} >open modal</button> 
   <Outlet/>
    </div>
  )
}

export default Home
