import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {createEmployee} from '../features/employees/getEmployees';
import Picker from '../features/datepicker/datePicker';
import DropDownStates from '../features/dropdown/dropdownStates';
import DropDownDepartment from '../features/dropdown/dropdownDepartment';

function Form() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    

    function submitEmployee(e) {
       e.preventDefault()
        console.log(data)
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const birthDate = document.getElementById('date-of-birth').value
      dispatch(createEmployee({firstName, lastName, birthDate}))
      
     
      
      
      
      
        

    }

      

  

    
    
   return(
    <div>
    <form action="#" id="create-employee"  style={{display: "flex", flexDirection:"column",width:"200px",margin:"0 auto"}}>
    <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" />

    <label htmlFor="last-name">Last Name</label>
    <input type="text" id="last-name" />

    <label htmlFor="date-of-birth">Date of Birth</label>
    <Picker id="birthDate"/>
    

    <label htmlFor="start-date">Start Date</label>
    <Picker id="startDate"/>
    <label htmlFor="department">Department</label>
    <DropDownDepartment />
    
    <fieldset className="address" style={{display: "flex", flexDirection:"column"}}>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <DropDownStates />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>
                <button onClick={submitEmployee} >Create Employee</button>
    </form>
        
    </div>     
   )
}

export default Form;