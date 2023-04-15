import { useDispatch } from 'react-redux';
import { usestates } from 'react';
import {createEmployee} from '../features/employees/Employee';
import Picker from '../features/datepicker/datePickerBirthDate';
import PickerStartDate from '../features/datepicker/datePickerStartDate';
import DropDownstates from '../features/dropdown/dropdownStates';
import DropDowndepartment from '../features/dropdown/dropdownDepartment'

function Form({onClk}) {
    
    

   
  
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
          <label htmlFor="departments">departments</label>
          <DropDowndepartment className="departments" />
    
            <fieldset className="address" style={{display: "flex", flexDirection:"column"}}>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" /*required*//>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" /*required*/ />

                    <label htmlFor="states">states</label>
                    <DropDownstates />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" /*required*//>
            </fieldset>
        <button id="submit" onClick={onClk} >Create Employee</button>
                
    </form>
        
    </div>     
   )
}

export default Form;