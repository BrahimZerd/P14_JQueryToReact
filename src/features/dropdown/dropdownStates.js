import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import dropdownData from '../../assets/dropdownData';


function dropDownStates () {


    
const defaultOption = dropdownData;


return(

<Dropdown className="states" options={dropdownData}  value={defaultOption} placeholder="Select an option" />)



}


export default dropDownStates;