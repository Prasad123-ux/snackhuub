import { configureStore } from "@reduxjs/toolkit"; 
import foodReducer from "./foodSlice"   
// import { thunk } from "redux-thunk";




const store= configureStore({
    reducer:{
        foods:foodReducer,

    },
  
})

export default store;