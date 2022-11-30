import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Modals =() =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-dark" onClick={handleShow} style={{
        textAlign:"center",
        margin:"5rem 20rem"
      }} >
      SHOW MODAL
      </Button>
        

      <Modal  show={show} onHide={handleClose}>
        <Modal.Header className='btn btn-danger'  closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header >
           
        <Modal.Footer className='text-center display-1 fw-bold ' >
       
       
       
        ÖZKAN DEMİR
       
       
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals