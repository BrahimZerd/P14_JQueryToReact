import { useState } from 'react';
import Picker from '../features/datepicker/datePickerBirthDate';
import PickerStartDate from '../features/datepicker/datePickerStartDate';
import DropDownstates from '../features/dropdown/dropdownStates';
import DropDowndepartment from '../features/dropdown/dropdownDepartment'
import validate from '../features/validatForm/validationForm';
function Form({onClk}) {


  





 
    

   
  
  return(
    
      <div className='formulaireDiv'>
        <form action="#" id="create-employee"  style={{display: "flex", flexDirection:"column"}}>
        <div style={{display: "flex",  flexDirection:"initial"}}>
          <div className='divFirstName'>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" /*required*//>
          
          </div>
          <div className='lastName'>
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName"/*required*/ />
          </div>
          <div className='birthDate'>
          <label htmlFor="date-of-birth">Date of Birth</label>
          <Picker /*required*//>
          </div>
          <div className='startdate'>
          <label htmlFor="start-date">Start Date</label>
          <PickerStartDate /*required*//>
          </div>
          </div>
          <div className='departmentDiv' >
          <label htmlFor="departments">departments</label>
          <DropDowndepartment className="departments" />
          </div>
          
          <div>
            <fieldset className="address" style={{display: "flex",}}>
                    <legend>Address</legend>
                    <div className='street'>
                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" /*required*//>
                    </div>
                    <div className="city">
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" /*required*/ />
                    </div>
                    <div className="states">

                    <label htmlFor="states">states</label>
                    <DropDownstates />
                    </div>
                    <div className="zip">

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" /*required*//>
                    </div>
            </fieldset>
            </div>  
            
        <button id="submit" onClick={onClk} >Create Employee</button>
                
    </form>
        
    </div>     
   )
}

export default Form;