import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function dropDownDepartment () {

    const dataDepartments = [
        'Marketing', 'Engineering', 'Human Resources', 'Legal'
    ];    
    
const defaultOption = dataDepartments[0];

return(

<Dropdown id="departments" options={dataDepartments}  value={defaultOption} placeholder="Select an option" />)



}


export default dropDownDepartment;