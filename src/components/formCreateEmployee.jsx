import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import Picker from '../features/datepicker/datePickerBirthDate';
import PickerStartDate from '../features/datepicker/datePickerStartDate';
import DropDownstates from '../features/dropdown/dropdownStates';
import DropDowndepartment from '../features/dropdown/dropdownDepartment'
import { setInput } from '../Slices/ValidationForm';
import { setErrors } from '../Slices/ValidationForm';
function Form({onClk}) {


  const  errors  = useSelector((state) => state.form.errors);


  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setInput({ name, value }));
    if (value.length < 2) {
      dispatch(setErrors({ name, error: `must contain at least 2 letters` }));
    } else {
      dispatch(setErrors({ name, error: '' }));
    }
    
   };

  const inputClass = (name) => {
    
    return errors[name] ? 'invalid-input' : '';
  };
  const disabledButton = Object.values(errors).some(error => error !== '');




 
    

   
  
  return(
    
      <div className='formulaireDiv'>
        <form action="#" id="create-employee"  style={{display: "flex", flexDirection:"column"}}>
        <div style={{display: "flex",  flexDirection:"initial", width:'100%'}}>
          <div className="divFirstName">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstname" onChange={handleInputChange} className={inputClass('firstname')} required/>
          {errors.firstname && <span style={{color:'red', whiteSpace:'nowrap'}} >{errors.firstname}</span>}

          </div>
          
          <div className='lastName'>
          
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastname"  onChange={handleInputChange} className={inputClass('lastname')} required />
          {errors.lastname && <span style={{color:'red', whiteSpace:'nowrap'}}>{errors.lastname}</span>}
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
                    <input id="street" type="text" name="street" onChange={handleInputChange} className={inputClass('street')}required/>
                    {errors.street && <span style={{color:'red', whiteSpace:'nowrap'}}>{errors.street}</span>}
                    </div>
                    <div className="city">
                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name='city' onChange={handleInputChange} className={inputClass('city')}required />
                    {errors.city && <span style={{color:'red', whiteSpace:'nowrap'}}>{errors.city}</span>}
                    </div>
                    
                    <div className="states">

                    <label htmlFor="states">states</label>
                    <DropDownstates />
                    </div>
                    <div className="zip">

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="text" min="2"name='zipcode' onChange={handleInputChange} required/>
                    {errors.zipcode && <span style={{color: 'red', whiteSpace:'nowrap'}}>{errors.zipcode}</span>}
                    </div>
            </fieldset>
            </div>  
            
        <button id="submit"  disabled={disabledButton} onClick={onClk} >Create Employee</button>
                
    </form>
        
    </div>     
   )
}

export default Form;