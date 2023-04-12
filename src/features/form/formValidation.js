import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: { formData: {}, },
  reducers: {
    updateFormData: (state, action) => {
      state.formData = action.payload ;
    },
    submitForm: (state) => {
      // effectuer une action pour envoyer les données du formulaire au serveur
    },
  },
});

export const { updateFormData, submitForm } = formSlice.actions;
export default formSlice.reducer;