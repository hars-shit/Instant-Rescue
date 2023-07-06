import { createSlice } from "@reduxjs/toolkit";

const FormData=createSlice({
    name:"formData",
    initialState:[],
    reducers:{
        saveFormData(state,action){
            state.push(action.payload);
        }
    }
})
export const {saveFormData}=FormData.actions;
export default FormData.reducer;