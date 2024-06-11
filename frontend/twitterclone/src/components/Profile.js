import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import Avatar from "react-avatar";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import useGetProfile from "../hooks/useGetProfile";

const Profile = () => {
  const {user, profile} = useSelector(store=>store.user);
  const { id } = useParams();
    useGetProfile(id);
    //HOOKS
    

  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link to="/" className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer">
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">{profile?.name}</h1>
            <p className="text-gray-500 text-sm">6 posts</p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?cs=srgb&dl=pexels-danny-meneses-340146-943096.jpg&fm=jpg" class="object-cover h-48 w-full" alt="banner"></img>
        <div className='absolute top-52 ml-2 border-4 border-white rounded-full'>
          <Avatar src="https://wallpapers.com/images/hd/anime-pfp-sad-boy-40s0vjfpa8vt3ou3.jpg" size="80" round={true} />
        </div>
        <div className="text-right ml-4">
        <button className='px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-400 my-2 mx-2'>Edit Profile</button>
        </div>
        <div className='mx-4'>
          <h1 className='font-bold text-xl'>{profile?.name}</h1>
          <p>{`@${profile?.username}`}</p>
        </div>
        <div className='mx-4 my-2 text-sm'>
            <p>Enthusiastic Web Developer | Passionate Learner Eager to Contribute and Grow in the Exciting World of Web Development 🚀</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
