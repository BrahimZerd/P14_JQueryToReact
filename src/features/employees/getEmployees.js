import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import getDataAPI from '../../services/getEmployeeAPI';

const initialState = {
  user: []
}


const user = {}
export const getAsyncData = createAsyncThunk('getData',
async() => {
  const promise =  await getDataAPI()
  .then(response => {return(response.json())})
  
  })

const dataSlice = createSlice({
  name: "getData",
  initialState,
  
  extraReducers: {
    
      [getAsyncData.fulfilled]: (state, action) => {
        console.log(action)
     }}
      
});

const { reducer } = dataSlice
export const { setUser } = dataSlice.actions
export default reducer;





