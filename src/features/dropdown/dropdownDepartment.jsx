import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

/** @function dropDowndepartment use a npm framework who display a dropdown with the departments services */
function dropDowndepartment () {

    const datadepartments = ['Marketing', 'Engineering', 'Human Resources', 'Legal'];    
    
const defaultOption = datadepartments[0];

return(

<Dropdown className="departments" options={datadepartments}  value={defaultOption} placeholder="Select an option" />)



}


export default dropDowndepartment;