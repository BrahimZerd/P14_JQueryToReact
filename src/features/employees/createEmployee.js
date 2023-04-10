import { createSlice } from '@reduxjs/toolkit';




export const createData = createSlice({
    name: "createData",
    initialState: [],
    reducers : {
    getEmployees: (state, action) => {
        state = action.payload
      }
    ,
    addEmployee : (state, action) => {
      state.push(action.payload);
      
    }}
})

export const createEmployee = (arg) => async dispatch => {
  dispatch(addEmployee(arg))
  
}

export const {getEmployees, addEmployee} = createData.actions;



  
export default createData.reducer;
