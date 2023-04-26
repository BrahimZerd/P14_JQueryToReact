import Dropdown from 'react-dropdown';
import dropdownData from '../../assets/dropdownData';

/** @function DropDownstates use a npm framework who display a dropdown with the states of the US */


const DropDownstates =() => {




    
const defaultOption = dropdownData;



return(

<Dropdown className="states" name="state" options={dropdownData}  value={defaultOption} placeholder="Select an option" />)



}


export default DropDownstates;