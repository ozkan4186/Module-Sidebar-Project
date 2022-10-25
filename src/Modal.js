import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Modal = () => {
  const navigate=useNavigate()
  return (
    <div>
   <i onClick={()=>navigate("/")} ><FaTimes/></i>
    </div>
  )
}

export default Modal
