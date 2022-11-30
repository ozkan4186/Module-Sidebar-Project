import { render } from '@testing-library/react';
import logo from "./logo.svg";
import { social, links } from "./data";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { FaBars } from 'react-icons/fa';

 const Sidebar= ()=> {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
           <FaBars
        className="hamb"
          style={{
            color: "#49A6E9",
            fontSize: "3rem",
            margin: "2rem",
            cursor: "pointer",
          }}
          onClick={handleShow}
        />
    

    <Modal/>
        
      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
              <img src={logo} alt="{logo}" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
           <ul>
          {links
            .filter((id) => id.id === 1)
            .map((item) => {
              return (
                <li key={item.id} >
                  <Link
                    style={{
                      color: "#49A6E9",
                      fontSize: "1.5rem",
                      textDecoration:"none"
                    }}
                    to={item.url}
                  >
                    {item.icon}
                    <span> </span>
                    {item.text}
                  </Link>
                </li>
              );
            })}
          {links
            .filter((id) => id.id !== 1)
            .map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    style={{
                      color: "#49A6E9",
                      fontSize: "1.5rem",
                      textDecoration:"none"
                    }}
                    to={link.url}
                  >
                    {link.icon}
                    <span> </span>
                    {link.text}
                  </Link>
                </li>
              );
            })}
        </ul>
    
    
        {social.map((icon) => {
          return (
            <a key={icon.id} href={icon.url}>
              {icon.icon}
            </a>
          );
        })}
         
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar