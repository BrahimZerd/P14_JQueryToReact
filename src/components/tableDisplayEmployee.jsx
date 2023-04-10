import { useSelector } from "react-redux";
import Table from "rc-table";




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
            dataIndex: 'department',
            key: "department",
            width: 100,
        },
        {
            title: "Date of Birth",
            dataIndex: 'dateOfBirth',
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
            dataIndex: 'state',
            key: "state",
            width: 100,
        },{
            title: "Zip Code",
            dataIndex: 'zipCode',
            key: "zipCode",
            width: 200,
        },
       
      ];
   
    console.log(data)
    
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
    
      
      
 