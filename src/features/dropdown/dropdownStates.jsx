import Dropdown from 'react-dropdown';
import dropdownData from '../../assets/dropdownData';



const DropDownstates =() => {




    
const defaultOption = dropdownData;



return(

<Dropdown className="states" name="state" options={dropdownData}  value={defaultOption} placeholder="Select an option" />)



}


export default DropDownstates;