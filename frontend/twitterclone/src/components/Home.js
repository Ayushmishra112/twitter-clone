import React from 'react'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Feed from './Feed'
import { Outlet } from 'react-router-dom';
import useGetProfile from '../hooks/useGetProfile';
import { useSelector } from 'react-redux';
import useStranger from '../hooks/useOtherUsers';

const Home = () => {
    //hook
    const{user, otherUsers} = useSelector(store => store.user);
    useStranger(user?._id);

  return (
    <div className='flex justify-between w-[80%] mx-auto'>
        <LeftSidebar/>
        <Outlet/>
        <RightSidebar otherUsers={otherUsers}/>
    </div>
  )
}

export default Home;