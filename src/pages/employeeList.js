import React from 'react';
import TableDisplayEmployee from '../components/tableDisplayEmployee'
import { getEmploye } from '../Slices/employees/Employee';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function EmployeeList() {
  const dispatch = useDispatch();
  const data = useSelector((state)=> state.data)
  console.log(data)
  
 
  return (
    <div className="List">
      <TableDisplayEmployee />
      
    </div>
  );
}

export default EmployeeList;
