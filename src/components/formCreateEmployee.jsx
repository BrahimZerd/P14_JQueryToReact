import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {createEmployee} from '../features/employees/createEmployee';
import Picker from '../features/datepicker/datePickerBirthDate';
import PickerStartDate from '../features/datepicker/datePickerStartDate';
import DropDownStates from '../features/dropdown/dropdownStates';
import DropDownDepartment from '../features/dropdown/dropdownDepartment';
import Modal from '../features/modal/Modal';
import { updateFormData, submitForm } from '../features/form/formValidation';


function Form() {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    const formData = useSelector((state) => state.form.formData);

    //faire la validation formulaire Regex !!!!
    
    


    
    const submitEmployee = (e) => {
      e.preventDefault()
    let verifiedfirstName = null; 
    let verifiedlastName = null;
    let verifiedStreet = null;
    


    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const birthDate = document.getElementById('birthDate').value
    const startDate = document.getElementById('startDate').value
    const street = document.getElementById('street').value
    const states = document.getElementsByClassName('Dropdown-root states')[0].innerText;
    const zipcode = document.getElementById('zip-code').value;
    const city= document.getElementById('city').value;
    const departments = document.getElementsByClassName('Dropdown-root departments')[0].innerText;

    
    //  validateForm(firstName,lastName,birthDate,zipcode, states)
    //  dispatch(createEmployee({ firstName,lastName,birthDate,startDate,street,states,city,zipcode,departments}))
    firstName.value.length <= 2 ? firstName.focus() : verifiedfirstName= true;;
    lastName.value.length <= 2 ? lastName.focus() : verifiedlastName= true;
    let verifiedbirthDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(birthDate)
    let verifiedstartDate =  /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/.test(startDate)
    

    console.log( verifiedbirthDate, verifiedstartDate)
      
    }

   return(
    <div>
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
                <button onClick={submitEmployee} >Create Employee</button>
                <Modal
                 />
    </form>
        
    </div>     
   )
}

export default Form;