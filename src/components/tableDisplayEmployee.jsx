import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { unwrapResult } from '@reduxjs/toolkit'
import { getAsyncData } from "../features/employees/getEmployees";
import { useState } from "react";

function Display() {
    const dispatch = useDispatch()
    const data = useSelector((state) => state.data)


      useEffect(() => {
      dispatch(getAsyncData())
      
    },[])
      
    console.log(data)
      
      
      
      
    
   
  
   
    return(
        <div>Bonjour
            
           
        <Link to="/">Retour</Link>
        </div>
    )
}



export default Display;