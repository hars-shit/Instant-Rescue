
// // this store is gathering the data from minor slices 
// const store=configureStore({
//      reducer:{     //which slice data is coming is checks ny reducer 
//         users: UserSlice 
//     }
// })
// export default store;

import persistReducer from "redux-persist/es/persistReducer";
import UserSlice from "./UserSlice";
import persistStore from "redux-persist/es/persistStore";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import FormData from "./FormData";
// import FormData from "./FormData";


const persistConfig = {
  key: "root",
 storage
};

const reducer=combineReducers({
  users:UserSlice,
  formData:FormData,
})
const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
 reducer:persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };