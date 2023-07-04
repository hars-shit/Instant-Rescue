import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";



// this store is gathering the data from minor slices 
const store=configureStore({
     reducer:{     //which slice data is coming is checks ny reducer 
        users: UserSlice 
    }
})
export default store;