import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getDataAPI } from '../../services/getEmployeeAPI';
import createEmployeeAPI from '../../services/createEmployeeAPI';
const initialState = {
  user : []
}



export const getAsyncData = createAsyncThunk("getData",
async () => {
  
     const result = await getDataAPI()
     .then(response =>response.json())
     .then(response => (response))

   return result
     
    
})
export const createEmployee = createAsyncThunk('createuser',
async(arg) => {
    //a travailler sur le push dans le JSON // fichier Mock ???
    //creation d'un push object dans le json using fetch
   createEmployeeAPI(arg)
   
   
    


    
    
}
)


const dataSlice = createSlice({
  name: "getData",
  initialState,
  reducers:{},
  extraReducers: {
    
      [getAsyncData.fulfilled]: (state, action) => {
        state.user = action.payload
        console.log(state.user)
     },
      [createEmployee.fulfilled]:(state, action) => {
      
     }
    
    }
      
},);

const { reducer } = dataSlice
export const { setUser } = dataSlice.actions
export default reducer;





