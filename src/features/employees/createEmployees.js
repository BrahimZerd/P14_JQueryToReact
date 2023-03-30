import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createEmployeeAPI from '../../services/createEmployeeAPI';

const initialState = {
    id:"",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate:"",
    department:"",
    street:"",
    city:"",
    state:"",
    zipCode:""
};



export const createEmployee = createAsyncThunk('createuser',
async(arg) => {
    //a travailler sur le push dans le JSON // fichier Mock ???
    console.log(arg)
    createEmployeeAPI(arg)
    
    
}
)  
 const userSlice = createSlice({
    name:"createuser",
    initialState,
    extraReducers:{
        [createEmployee.fulfilled]: (state,action) => {
           console.log(action)
           state.firstName =action.meta.arg.firstName
           state.lastName = action.meta.arg.lastName
           

           
           
            
        }
    }
})

const {reducer} = userSlice

export default reducer;
