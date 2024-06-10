import {createSlice} from "@reduxjs/toolkit";
const tweetslice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
        refresh:false,
        isActive:true
    },
    reducers:{
        getAllTweets:(state,action)=>{
            state.tweets = action.payload;
        },
        getRefresh:(state)=>{
            state.refresh = !state.refresh;
        },
        getIsActive:(state,action)=>{
            state.isActive = action.payload;
        }
    }
});
export const {getAllTweets,getRefresh,getIsActive} = tweetslice.actions;
export default tweetslice.reducer;