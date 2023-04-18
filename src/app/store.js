import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux"; 
import Employee from '../Slices/employees/Employee.js';
import formReducer from '../Slices/ValidationForm.js'
const reducer = combineReducers({
 data: Employee ,
 form: formReducer,
});





const store = configureStore({
    reducer,

});

export default store;