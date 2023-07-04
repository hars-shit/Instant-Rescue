import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"location",
    initialState:[],
    reducers:{
 showLocation(state,action){
    state.push(action.payload);
    console.log('redux:',action.payload)
 }
    }
})
console.log(userSlice.actions)
export default userSlice.reducer;
export const {showLocation}=userSlice.actions;