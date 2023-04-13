import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {createEmployee} from '../features/employees/Employee';
import Picker from '../features/datepicker/datePickerBirthDate';
import PickerStartDate from '../features/datepicker/datePickerStartDate';
import DropDownStates from '../features/dropdown/dropdownStates';
import DropDownDepartment from '../features/dropdown/dropdownDepartment';
import Modal from '../features/modal/Modal';


function Form({onClk}) {
    
    const dispatch = useDispatch()
    const [modalOpen, SetModal] = useState(false)

    //faire la validation formulaire Regex !!!!
    
    function closeModal() {
      
      const root = document.getElementById('root');
    root.style.opacity = '1'
    }
    
    const submitEmployee = (e) => {
      e.preventDefault()
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const birthDate = document.getElementById('birthDate').value
    const startDate = document.getElementById('startDate').value
    const street = document.getElementById('street').value
    const states = document.getElementsByClassName('Dropdown-root states')[0].innerText;
    const zipcode = document.getElementById('zip-code').value;
    const city= document.getElementById('city').value;
    const departments = document.getElementsByClassName('Dropdown-root departments')[0].innerText;

    
    //  validateForm(firstName,lastName,birthDate,zipcode, states)
    dispatch(createEmployee({ firstName,lastName,birthDate,startDate,street,states,city,zipcode,departments}))
    //open the Modal
   
    
  }

   
  
  return(
    
      <div className='formulaireDiv'>
        <form action="#" id="create-employee"  style={{display: "flex", flexDirection:"column",width:"200px",margin:"0 auto"}}>
         
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" /*required*//>

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName"/*required*/ />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Picker /*required*//>
    

          <label htmlFor="start-date">Start Date</label>
          <PickerStartDate /*required*//>
          <label htmlFor="department">Department</label>
          <DropDownDepartment className="department" />
    
            <fieldset className="address" style={{display: "flex", flexDirection:"column"}}>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" /*required*//>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" /*required*/ />

                    <label htmlFor="state">State</label>
                    <DropDownStates />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" /*required*//>
            </fieldset>
        <button id="submit" onClick={onClk} >Create Employee</button>
                
    </form>
        
    </div>     
   )
}

export default Form;