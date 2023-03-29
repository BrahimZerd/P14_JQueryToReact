import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { getAsyncData } from "../features/employees/getEmployees";

function Display() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)

 useEffect(() => {
    dispatch(getAsyncData())
    .then(response => {return response})})
    

    console.log(data)
    
   
  
   
    return(
        <div>Bonjour
            
           
        <Link to="/">Retour</Link>
        </div>
    )
}



export default Display;