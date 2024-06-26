import React from 'react'
import Avatar from 'react-avatar'
import { FaRegComment } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
function Tweet({tweet}) {
  return (
    <div className='border-b border-gray-200'>
        <div>
         <div className='flex p-4'>
            <Avatar src="https://wallpapers.com/images/hd/anime-pfp-sad-boy-40s0vjfpa8vt3ou3.jpg" size="40" round={true} />
              
            <div className='ml-2 w-full'>
            <div className='flex items-center ml-2'>
                <h1 className='font-bold'>{tweet?.userDetails[0].name}</h1>
                <p className='text'>`@{tweet?.userDetails[0].username}  . 1m`</p>
            </div>
            <div>
                <p>{tweet?.description}</p>
            </div>
            <div className='flex justify-between my-3'>
            <div className='flex items-center'>
                <div className='p-2 hover:bg-green-200 rounded-full cursor-pointer'>
                  <FaRegComment size="20px" />
                </div>
                <p>{tweet?.like?.length}</p>
            </div>
                <div className='flex items-center'>
                <div className='p-2 hover:bg-pink-200 rounded-full cursor-pointer'>
                <CiHeart size="24px" />  
                </div>
                <p>0</p>
            </div>
                <div className='flex items-center'>
                <div className='p-2 hover:bg-yellow-200 rounded-full cursor-pointer'>
                <CiBookmark size="24px" />
                </div>
                <p>0</p>
             </div>
                <div className='flex items-center'>
                <div className='p-2 hover:bg-red-300 rounded-full cursor-pointer'>
                <MdOutlineDeleteOutline size="24px" />
                </div>
                <p>0</p>
            </div>
            </div>
            </div> 
            </div>
         </div>
    </div>
  )
}

export default Tweet