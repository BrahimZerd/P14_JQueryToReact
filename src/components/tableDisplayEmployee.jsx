import Logo from '../assets/wealth.png'
import React from 'react';
import { DataTable } from '@lephenix47/react-datatable';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import data from '../data.json'

/** @function TableP is a function with a framework using a table to display the employees, returning html module */

const TableP = ()  =>{

//const data = useSelector((state) => state.data)


      return(
      <div>
        
        <img src={Logo} alt='logo' />
        <Link className='home' to='/'>Homepage</Link>
          <DataTable 
              data={data} 
              
              filter
              sort
              paging
              lengthMenu={[ 10, 15, 25]}
              info
              
              
          />
          
          
      </div>)
      }
  export default TableP;      
    
      
      
 