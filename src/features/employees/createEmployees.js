import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import data from '../../assets/data.json'


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
    return arg
    
}
)  
 const userSlice = createSlice({
    name:"createuser",
    initialState,
    extraReducers:{
        [createEmployee.fulfilled]: (state,action) => {
           
           state.firstName =action.payload.firstName
           state.lastName = action.payload.lastName
           state.dateOfBirth = action.payload.dateOfBirth
           state.startDate = action.payload.startDate
           state.department = action.payload.department
           state.street = action.payload.street
           state.city = action.payload.city
           state.state = action.payload.state
           state.zipCode = action.payload.zipCode

           
           
            
        }
    }
})

const {reducer} = userSlice

export default reducer;
