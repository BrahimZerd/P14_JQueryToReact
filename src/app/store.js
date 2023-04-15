import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from "redux"; 
import Employee from '../features/employees/Employee.js';

const reducer = combineReducers({
 //...     
 data: Employee ,
});





const store = configureStore({
    reducer,

});

export default store;