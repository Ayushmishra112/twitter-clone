import React from 'react'
import { CiHashtag, CiHome, CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const LeftSidebar = () => {
  const {user} = useSelector(store=>store.user);
  return (
    <div className='w-[20%]'>
        <div>
            <img className='ml-5' width={"28px"} src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-294x300.png"></img>
        </div>
        <div className='my-4'>
        <Link to="/" className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <div>
              <CiHome size="24px"/>
            </div>
            </div>
            <h1 className='font-bold text-lg ml-2'>Home</h1>
        </Link>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiHashtag size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Explore</h1>
        </div>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <IoIosNotificationsOutline size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Notifications</h1>
        </div>
        <Link to={`/profile/${user?._id}`} className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiUser size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Profile</h1>
        </Link>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <CiBookmark size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>Bookmarks</h1>
        </div>
        <div className='flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full'>
            <div>
              <AiOutlineLogout size="24px"/>
            </div>
            <h1 className='font-bold text-lg ml-2'>log out</h1>
        </div>
        <button className='px-4 py-2 border-none text-md bg-[#1D9Bf0] w-full rounded-full text-white font-bold'>Post</button>

        </div>
      </div>
  )
}

export default LeftSidebar