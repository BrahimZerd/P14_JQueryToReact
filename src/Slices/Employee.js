import { createSlice } from '@reduxjs/toolkit';
/**@param {arg} async function to get an object which contain the new Employee */
/** @function addEmployee is a reducer to push to the state the new employee */

export const createData = createSlice({
    name: "createData",
    initialState: [
     
    ],
    reducers : {
   
    addEmployee : (state, action) => {
      state.push(action.payload)
     
      
      
    },
   
  }


})

export const createEmployee = (arg) => async dispatch => {
  dispatch(addEmployee(arg))
  
}



export const {addEmployee} = createData.actions;



  
export default createData.reducer;