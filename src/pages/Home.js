import React, { useContext } from 'react'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { Outlet, useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebar'

const Home = () => {
  const navigate=useNavigate()

  const [open, setOpen] = useState(false)

  return(
    <div  >
   {!open && <FaBars onClick={()=>setOpen(!open)}  /> }
       {open && <Sidebar open={open} setOpen={setOpen}/>}

       <button onClick={()=>navigate("/modal")} > SHOW MODAL </button>
       <Outlet/>
  
    </div>
  )
}

export default Home
