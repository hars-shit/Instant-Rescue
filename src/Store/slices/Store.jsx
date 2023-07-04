// import { configureStore } from "@reduxjs/toolkit";
// import UserSlice from "./UserSlice";

import persistReducer from "redux-persist/es/persistReducer";
import UserSlice from "./UserSlice";
import persistStore from "redux-persist/es/persistStore";
import { configureStore } from "@reduxjs/toolkit";



// // this store is gathering the data from minor slices 
// const store=configureStore({
//      reducer:{     //which slice data is coming is checks ny reducer 
//         users: UserSlice 
//     }
// })
// export default store;


//changed code
// import { configureStore } from "@reduxjs/toolkit";

import storage from "redux-persist/lib/storage";
// import UserSlice from "./UserSlice";
// import persistReducer from "redux-persist/es/persistReducer";
// import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
 storage
};

const persistedReducer = persistReducer(persistConfig, UserSlice);

const store = configureStore({
  reducer: {
    users: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };