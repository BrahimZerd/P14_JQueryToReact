import { useSelector } from "react-redux";
import Table from "rc-table";
import { useDispatch } from "react-redux";
import  {getEmploye}  from "../features/employees/Employee";
import { getTotalEmployees } from "../features/employees/Employee";
import { useEffect } from "react";
import Logo from '../assets/wealth.png'




function Display() {
    


const dispatch = useDispatch();


 



 console.log()



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
  
 console.log(data)
  


    
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
            width: 100,
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
   return (
      <div className="containers">
        <img src={Logo} alt="logo" style={{ borderRadius: "50%", height: "155px", width:'155px',objectFit:'fit', paddingLeft: '5px', }}/>
        <Table
      columns={columns}
      data={data}
      tableLayout="auto"
      
    />
    <div>
     
    </div>
      </div>
    );
  };
  export default Display;      
    
      
      
 