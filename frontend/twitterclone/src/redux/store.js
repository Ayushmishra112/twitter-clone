import {configureStore} from "@reduxjs/toolkit";
import userslice from "./userslice";
import tweetslice from "./tweetslice";

const store = configureStore({
    reducer: {
       user:userslice 
    }
});

export default store;