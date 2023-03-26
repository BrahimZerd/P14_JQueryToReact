import React from 'react';
import HeaderCEmployee from '../components/headerCreateEmployee';
import Form from '../components/formCreateEmployee';
import '../App.css';

function CreateEmployee() {
  return (
    <div className="App">
      <HeaderCEmployee />
      <Form />
    </div>
  );
}

export default CreateEmployee;
