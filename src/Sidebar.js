import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link } from 'react-router-dom'


const Sidebar = ({open,setOpen}) => {

 
  
  return (
    
    <div> 
      <div className="images">
        <img src={logo} alt="" />
       <i onClick={()=>setOpen(!open)}><FaTimes/></i>
      </div>
      <div>
        <ul>
          {links.map((item)=>{
            return(
              <li > <Link to={item.url}><i>{item.icon} </i>{item.text}</Link></li>
            )
          })}

        </ul>
   
      </div>
      <div className="icons">
        {social.map((icons)=>{
          return(
            <a  href={icons.url}> {icons.icon} </a>
          )
        })}
      </div>
    </div>

  ) 
}

export default Sidebar
