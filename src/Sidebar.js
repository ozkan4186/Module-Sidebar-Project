import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link } from 'react-router-dom'

const Sidebar = ({open,setOpen}) => {
  return(
    <div>
      <div className="images">
        <img src={logo} alt="" />
         {open && <FaTimes onClick={()=>setOpen(!open)}  /> }
      </div>
      <div className="links">
        {links.map((item)=>{
          const{id,url,text,icon}=item;
          return(
            <ul key={id} >
              <li> <Link to={url} >{icon}{text}</Link></li>
            </ul>
          
            
          )
        })}


      </div>
      <div className="social">
        {social.map((item)=>{
          const{id,url,icon}=item
          return(
            <Link  key={id} to={url} > {icon} </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
