import { createSlice } from '@reduxjs/toolkit';
import getApi from '../../service/API';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const createData = createSlice({
    name: "createData",
    initialState: [
     
    ],
    reducers : {
   
    addEmployee : (state, action) => {
      state.push(action.payload)
     
      
      
    }}
})

export const createEmployee = (arg) => async dispatch => {
  dispatch(addEmployee(arg))
  
}



export const {addEmployee} = createData.actions;



  
export default createData.reducer;