import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createUserReducer from '../features/employees/createEmployees'
import dataReducer from '../features/employees/getEmployees'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    createUser: createUserReducer,
    data: dataReducer,
  },
});
