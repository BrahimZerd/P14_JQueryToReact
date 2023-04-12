import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux"; 
import Employee from '../features/employees/Employee.js';
import checkForm from '../features/form/formValidation'

const reducer = combineReducers({
 //...     
 data: Employee,
 form: checkForm,
});





const store = configureStore({
    reducer,

});

export default store;