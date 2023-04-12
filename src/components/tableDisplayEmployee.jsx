import { useSelector } from "react-redux";
import Table from "rc-table";
import { useDispatch } from "react-redux";
import { useEffect } from "react";




function Display() {
    
const data = useSelector((state) => state.data)



    
    const columns = [
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName",
          width: 200,
        },
        {
            title: "Last Name",
            dataIndex: 'lastName',
            key: "lastName",
            width: 200,
        },
        {
            title: "Start Date",
            dataIndex: 'startDate',
            key: "startDate",
            width: 200,
        },
        {
            title: "Department",
            dataIndex: 'departments',
            key: "departments",
            width: 100,
        },
        {
            title: "Date of Birth",
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
            title: "State",
            dataIndex: 'states',
            key: "state",
            width: 100,
        },{
            title: "Zip Code",
            dataIndex: 'zipcode',
            key: "zipCode",
            width: 200,
        },
       
      ];
   return (
      <div className="containers">
        <Table
      columns={columns}
      data={data}
      tableLayout="auto"
      rowKey={data => data.key}
    />
      </div>
    );
  };
  export default Display;      
    
      
      
 