import Table from "rc-table";
import { useDispatch } from "react-redux";
import data from '../data.json'
import Logo from '../assets/wealth.png'
import { render } from 'react-dom';
import React from 'react';
import { TablePagination } from 'react-pagination-table';




console.log(data)

 
  
 
  
 const Header = ["firstname", "lastName", "start date", "department", "birthdate","Street","City","state","zip Code","removeEmployee" ];

    
    
      const TableP = () =>
      <div>
         <img src={Logo} alt="logo" />
          <TablePagination
              title="Employee List"
              headers={ Header }
              data={ data }
              columns="firstName.lastName.startDate.departments.birthDate.street.city.states.zipcode.remove"
              perPageItemCount={ 15 }
              totalCount={ data.length }
              
              
          />
          
      </div>
  export default TableP;      
    
      
      
 