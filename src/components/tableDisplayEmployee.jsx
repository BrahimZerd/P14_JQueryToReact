import { useDispatch } from "react-redux";
import Logo from '../assets/wealth.png'
import { render } from 'react-dom';
import React from 'react';
import { DataTable } from '@lephenix47/react-datatable';
import data from '../data.json'



console.log(data)


 
  
 
  

    
    
      const TableP = () =>
      <div>
          <DataTable
              data={data} 
              title="Employee List" 
              filter
              sort
              paging
              lengthMenu={[ 10, 15, 25]}
              info
              
              
          />
          
      </div>
  export default TableP;      
    
      
      
 