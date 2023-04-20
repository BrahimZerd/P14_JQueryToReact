import Logo from '../assets/wealth.png'
import React from 'react';
import { DataTable } from '@lephenix47/react-datatable';
import { useSelector } from 'react-redux';



const TableP = ()  =>{

const data = useSelector((state) => state.data)


      return(
      <div>
        <img src={Logo} alt='logo' />
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
    
      
      
 