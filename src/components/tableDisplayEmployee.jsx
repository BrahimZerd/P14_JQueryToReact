import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';

import { getAsyncData } from "../features/employees/getEmployees";

function Display() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)
    console.log(data)
    dispatch(getAsyncData())
  .then(response => {return  response})
  
   
    return(
        <div>Bonjour
            
            {data.map(element => <p>{element.firstName}</p>)}
           
        <Link to="/">Retour</Link>
        </div>
    )
}



export default Display;