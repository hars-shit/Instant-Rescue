// import { createSlice } from "@reduxjs/toolkit";

// const userSlice=createSlice({
//     name:"location",
//     initialState:[],
//     reducers:{
//  showLocation(state,action){
//     state.push(action.payload);
//     console.log('redux:',action.payload)
//  }
//     }
// })
// console.log(userSlice.actions)
// export default userSlice.reducer;
// export const {showLocation}=userSlice.actions;

//updated slices
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "location",
  initialState: {
    location1: null,
    location2: null,
  },
  reducers: {
    setLocation1(state, action) {
      state.location1 = action.payload;
      // console.log('redux:', action.payload);
    },
    setLocation2(state, action) {
      state.location2 = action.payload;
      // console.log('redux:', action.payload);
    },
  },
});

// console.log(userSlice.actions);

export const { setLocation1, setLocation2 } = userSlice.actions;
export default userSlice.reducer;
