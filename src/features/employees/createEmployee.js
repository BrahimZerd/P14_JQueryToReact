import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';









  



export const createData = createSlice({
    name: "createData",
    initialState: [],
    reducers : {
      getEmployees: (state, action) => {
        state = action.payload
      }
    ,
    addEmployee : (state, action) => {
      console.log([action.payload])
      state.push(action.payload);
      
    }}
})

export const createEmployee = (arg) => async dispatch => {
  console.log(arg)
  dispatch(addEmployee(arg))
  
}

export const {getEmployees, addEmployee} = createData.actions;



  
export default createData.reducer;
