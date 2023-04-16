import Table from "rc-table";
import { useDispatch } from "react-redux";

import Logo from '../assets/wealth.png'
import { render } from 'react-dom';
import React from 'react';
import { TablePagination } from 'react-pagination-table';




const data = [
  { 
      firstName : 'John Doe' , 
      departments : 'Developer' , 
     city : 'San Francisco' ,
    } , 
    { 
      firstName : 'Jane Doe' , 
      departments : 'Designer' , 
      city : 'Los Angeles' 
    } ,
    { 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,{ 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,{ 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,{ 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,{ 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,{ 
     firstName : 'John Doe' , 
     departments : 'Developer' , 
    city : 'San Francisco' ,
   } , 
   { 
     firstName : 'Jane Doe' , 
     departments : 'Designer' , 
     city : 'Los Angeles' 
   } ,
   { 
    firstName : 'John Doe' , 
    departments : 'Developer' , 
   city : 'San Francisco' ,
  } , 
  { 
    firstName : 'Jane Doe' , 
    departments : 'Designer' , 
    city : 'Los Angeles' 
  } ,{ 
    firstName : 'John Doe' , 
    departments : 'Developer' , 
   city : 'San Francisco' ,
  } , 
  { 
    firstName : 'Jane Doe' , 
    departments : 'Designer' , 
    city : 'Los Angeles' 
  } ,{ 
    firstName : 'John Doe' , 
    departments : 'Developer' , 
   city : 'San Francisco' ,
  } , 
  { 
    firstName : 'Jane Doe' , 
    departments : 'Designer' , 
    city : 'Los Angeles' 
  } ,{ 
    firstName : 'John Doe' , 
    departments : 'Developer' , 
   city : 'San Francisco' ,
  } , 
  { 
    firstName : 'Jane Doe' , 
    departments : 'Designer' , 
    city : 'Los Angeles' 
  } ,{ 
    firstName : 'John Doe' , 
    departments : 'Developer' , 
   city : 'San Francisco' ,
  } , 
  { 
    firstName : 'Jane Doe' , 
    departments : 'Designer' , 
    city : 'Los Angeles' 
  } ,{ 
   firstName : 'John Doe' , 
   departments : 'Developer' , 
  city : 'San Francisco' ,
 } , 
 { 
   firstName : 'Jane Doe' , 
   departments : 'Designer' , 
   city : 'Los Angeles' 
 } ,
 { 
  firstName : 'John Doe' , 
  departments : 'Developer' , 
 city : 'San Francisco' ,
} , 
{ 
  firstName : 'Jane Doe' , 
  departments : 'Designer' , 
  city : 'Los Angeles' 
} ,{ 
  firstName : 'John Doe' , 
  departments : 'Developer' , 
 city : 'San Francisco' ,
} , 
{ 
  firstName : 'Jane Doe' , 
  departments : 'Designer' , 
  city : 'Los Angeles' 
} ,{ 
  firstName : 'John Doe' , 
  departments : 'Developer' , 
 city : 'San Francisco' ,
} , 
{ 
  firstName : 'Jane Doe' , 
  departments : 'Designer' , 
  city : 'Los Angeles' 
} ,{ 
  firstName : 'John Doe' , 
  departments : 'Developer' , 
 city : 'San Francisco' ,
} , 
{ 
  firstName : 'Jane Doe' , 
  departments : 'Designer' , 
  city : 'Los Angeles' 
} ,{ 
  firstName : 'John Doe' , 
  departments : 'Developer' , 
 city : 'San Francisco' ,
} , 
{ 
  firstName : 'Jane Doe' , 
  departments : 'Designer' , 
  city : 'Los Angeles' 
} ,{ 
 firstName : 'John Doe' , 
 departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
 firstName : 'Jane Doe' , 
 departments : 'Designer' , 
 city : 'Los Angeles' 
} ,
{ 
firstName : 'John Doe' , 
departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
firstName : 'Jane Doe' , 
departments : 'Designer' , 
city : 'Los Angeles' 
} ,{ 
firstName : 'John Doe' , 
departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
firstName : 'Jane Doe' , 
departments : 'Designer' , 
city : 'Los Angeles' 
} ,{ 
firstName : 'John Doe' , 
departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
firstName : 'Jane Doe' , 
departments : 'Designer' , 
city : 'Los Angeles' 
} ,{ 
firstName : 'John Doe' , 
departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
firstName : 'Jane Doe' , 
departments : 'Designer' , 
city : 'Los Angeles' 
} ,{ 
firstName : 'John Doe' , 
departments : 'Developer' , 
city : 'San Francisco' ,
} , 
{ 
firstName : 'Jane Doe' , 
departments : 'Designer' , 
city : 'Los Angeles' 
} ,

]


 
  
 
  
 const Header = ["firstname", "lastName", "start date", "department", "birthdate","Street","City","state","zip Code","removeEmployee" ];

    
    const columns = [
        {
          title: "first name",
          dataIndex: "firstName",
          key: "firstName",
          width: 200,
        },
        {
            title: "last name",
            dataIndex: 'lastName',
            key: "lastName",
            width: 200,
        },
        {
            title: "start date",
            dataIndex: 'startDate',
            key: "startDate",
            width: 200,
        },
        {
            title: "department",
            dataIndex: 'departments',
            key: "departments",
            width: 200,
        },
        {
            title: "birthdate",
            dataIndex: 'birthDate',
            key: "dateOfBirth",
            width: 200,
        },
        {
            title: "Street",
            dataIndex: 'street',
            key: "street",
            width: 200,
        },
        {
            title: "City",
            dataIndex: 'city',
            key: "city",
            width: 200,
        },
        {
            title: "state",
            dataIndex: 'states',
            key: "states",
            width: 100,
        },{
            title: "zip Code",
            dataIndex: 'zipcode',
            key: "zipCode",
            width: 200,
        },
       
      ];
      const App = () =>
      <div>
         <img src={Logo} alt="logo" />
          <TablePagination
              title="Employee List"
              headers={ Header }
              data={ data }
              columns="firstName.lastName.startDate.departments.birthDate.street.city.states.zipcode.remove"
              perPageItemCount={ 15 }
              totalCount={ data.length }
              
              partialPageCount={3}
          />
      </div>
  export default App;      
    
      
      
 