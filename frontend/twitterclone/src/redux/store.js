import {configureStore} from "@reduxjs/toolkit";
import userslice from "./userslice";
import tweetslice from "./tweetslice";

const store = configureStore({
    reducer: {
        //user slice
       user:userslice,
       //tweet slice
       tweet:tweetslice
    }
});

export default store;