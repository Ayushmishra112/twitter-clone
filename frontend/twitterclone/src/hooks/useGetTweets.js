import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "../redux/tweetslice";
import { TWEET_API } from "../utilities/Endpoints";

const useGetTweets = (id) => {
    const dispatch = useDispatch();
    const { refresh, isActive } = useSelector(store => store.tweet);
    

    const fetchTweets = async () => {
        try {
            const res = await axios.get(`${TWEET_API}/alltweets/${id}`, {
                withCredentials: true
            });
            console.log(res);
            dispatch(getAllTweets(res.data.tweets));
        } catch (error) {
            console.log(error);
        }
    }
    const followingTweetHandler = async () => { 
        try {
            axios.defaults.withCredentials = true;
            const res = await axios.get(`${TWEET_API}/followingtweets/${id}`);
            console.log(res);
            dispatch(getAllTweets(res.data.tweets));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(isActive){
            fetchTweets();
        }else{
            followingTweetHandler();
        }
    }, [isActive,refresh]);
};
export default useGetTweets;