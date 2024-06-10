import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar"; // Ensure this import is correct for your project
import { Link } from "react-router-dom";

const RightSidebar = ({ otherUsers }) => {
  return (
    <div className="w-[25%]">
      <div>
        <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none">
          <CiSearch size="20px" />
          <input
            type="text"
            placeholder="search"
            className="bg-transparent outline-none p-2"
          />
        </div>
        <div className="p-4 bg-gray-100 rounded-2xl my-4">
          <h1 className="font-bold text-lg">Who to follow</h1>
          {otherUsers?.map((user) => (
            <div key={user?._id} className='flex items-center justify-between my-3'>
              <div className='flex'>
                <div>
                  <Avatar src={user?.avatarUrl || "https://wallpapers.com/images/hd/anime-pfp-sad-boy-40s0vjfpa8vt3ou3.jpg"} size="40" round={true} />
                </div>
                <div className='ml-2'>
                  <h1 className='font-bold'>{user?.name}</h1>
                  <p className='text-sm'>{`@${user?.username}`}</p>
                </div>
              </div>
              <div>
                <Link to={`/profile/${user?._id}`}>
                  <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
