import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { getDataAPI } from '../../services/getEmployeeAPI';
const initialState = {
  user : []
}



export const getAsyncData = createAsyncThunk("getData",
async () => {
  
     const lol = await getDataAPI()
     .then(response =>response.json())
     .then(response => (response))

   return lol
     
    
   

    
 

  
 
  
  

  
  
 
  
  

  
  })

const dataSlice = createSlice({
  name: "getData",
  initialState,
  reducers:{},
  extraReducers: {
    
      [getAsyncData.fulfilled]: (state, action) => {
        state.user = action.payload
     },
     
    
    }
      
},);

const { reducer } = dataSlice
export const { setUser } = dataSlice.actions
export default reducer;





