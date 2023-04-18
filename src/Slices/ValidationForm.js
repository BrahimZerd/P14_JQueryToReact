import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  inputs: {
    firstname: '',
    lasname: '',
    city: '',
    states: '',
    street : '',
    zipcode :''
    
  },
  errors: {
    firstname: '',
    lastname: '',
    city: '',
    states : '',
    street: '',
    zipcode :''
  },
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setInput: (state, action) => {
      const { name, value } = action.payload;
      state.inputs[name] = value;
    },
    setErrors: (state, action) => {
      const { name, error } = action.payload;
      state.errors[name] = error;
    },
    resetForm: (state) => {
      state.inputs = {
        firstname: '',
        lastname: '',
        city: '',
        states : '',
        street: '',
        zipcode :''
       
      };
      state.errors = {
        firstname: '',
        lastname: '',
        city: '',
        states : '',
        street: '',
        zipcode :''
       
      };
    },
  },
});

export const { setInput, setErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;