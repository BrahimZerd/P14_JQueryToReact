import React from 'react';
import HeaderCEmployee from '../components/headerCreateEmployee';
import Form from '../components/formCreateEmployee';
import '../App.css';
import Modal from '../features/modal/Modal';
import { useDispatch } from 'react-redux';

import { useState } from 'react';
import {createEmployee} from '../features/employees/Employee';

function CreateEmployee() {
  const [modalOpen, SetModal] = useState(false)
  const dispatch = useDispatch();
  function closeModal() {
      SetModal(false)
      
    
  }
  function submitEmployee() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthDate = document.getElementById('birthDate').value
    const startDate = document.getElementById('startDate').value
    const street = document.getElementById('street').value
    const states = document.getElementsByClassName('Dropdown-root states')[0].innerText;
    const zipcode = document.getElementById('zip-code').value;
    const city= document.getElementById('city').value;
    const departments = document.getElementsByClassName('Dropdown-root departments')[0].innerText;
    dispatch(createEmployee({ firstName,lastName,birthDate,startDate,street,states,city,zipcode,departments}))


    SetModal(true)
    setTimeout(() => {
    document.getElementById('modal').classList.add('modal-open')
    document.getElementById('modalOverlay').style.display ="block"
  },)

    
  }

  return (
    modalOpen ? 
    
      
      <div id="App">
        <Modal
        
        className={'modal'}
        style={{opacity: '100',}}
        text={"Employee Successfully Created !"}
        close={closeModal}/>
      
      
      <HeaderCEmployee />
      <Form 
      onClk = {submitEmployee}

      />
      </div> 

    : 
    <div>
    <div id="App" style={{display: 'none'}} >
    <Modal
    
    className={'modal'}
    style={{opacity: '100',}}
    text={"Employee Successfully Created !"}
    close={closeModal}/>
   </div> 
   <div>       
  <HeaderCEmployee />
  <Form 
  onClk = {submitEmployee}

  />
  </div> 
  </div>
      
  );
}

export default CreateEmployee;
