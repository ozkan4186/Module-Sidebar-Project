import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import anka from './img/anka.png'
const Modal = () => {
  const navigate=useNavigate()
  return (
    <div>
      <div className="card text-center ">
     <img src={anka} alt=""  className='anka'  />
            <i onClick={()=>navigate("/")} > <FaTimes/> </i>
      </div>
    
    </div>
  ) 
}

export default Modal
