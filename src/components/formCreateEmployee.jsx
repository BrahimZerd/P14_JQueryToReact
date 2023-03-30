import { useSelector } from 'react-redux';
import getDataAPI from '../services/getEmployeeAPI';
import { useDispatch } from 'react-redux';
import {createEmployee} from '../features/employees/createEmployees';

function Form() {

    const dispatch = useDispatch()
    

    function submitEmployee(e) {
       e.preventDefault()
        
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const birthDate = document.getElementById('date-of-birth').value
      dispatch(createEmployee({firstName, lastName, birthDate}))
      .then(response => (response))
      
      
        

    }

      

  

    
    
   return(
    <div>
    <form action="#" id="create-employee"  style={{display: "flex", flexDirection:"column",width:"200px",margin:"0 auto"}}>
    <label htmlFor="first-name">First Name</label>
    <input type="text" id="first-name" />

    <label htmlFor="last-name">Last Name</label>
    <input type="text" id="last-name" />

    <label htmlFor="date-of-birth">Date of Birth</label>
    <input id="date-of-birth" type="text" ></input >

    <label htmlFor="start-date">Start Date</label>
    <input id="start-date" type="text" >
        </input >
    
    <fieldset className="address" style={{display: "flex", flexDirection:"column"}}>
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state"></select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" />
                </fieldset>
                <button onClick={submitEmployee} >Create Employee</button>
    </form>
        
    </div>     
   )
}

export default Form;