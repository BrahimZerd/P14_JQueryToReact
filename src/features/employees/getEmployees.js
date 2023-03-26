import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data.json'
import { useDispatch } from 'react-redux';


const initialState = [{
    firstName: "",
}];


export const getAsyncData = createAsyncThunk('getData',
async() => {
    
    return  data
}
)  

const dataSlice = createSlice({
  name: "getData",
  initialState,
  
  extraReducers: {
    
      [getAsyncData.fulfilled]: (state, action) => {
      
      return action.payload
    
      
     }}
      
});

const { reducer } = dataSlice
export const { setUser } = dataSlice.actions
export default reducer;





