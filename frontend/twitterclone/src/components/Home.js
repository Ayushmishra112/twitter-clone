import React, {useEffect} from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Feed from './Feed'
import { Outlet, useNavigate } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import useOtherUsers from '../hooks/useOtherUsers';
import { useSelector } from 'react-redux';
import useStranger from '../hooks/useOtherUsers';
import useGetTweets from '../hooks/useGetTweets';

const Home = () => {
    //hook
    const{user, otherUsers} = useSelector(store => store.user);
    useStranger(user?._id);
    useGetTweets(user?._id);
    // const id = "rgrre435b";
    const navigate = useNavigate();
    // useGetProfile(user._id);

    useEffect(()=>{
      if (!user) {
        navigate("/login");
      }
    },[]);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home;