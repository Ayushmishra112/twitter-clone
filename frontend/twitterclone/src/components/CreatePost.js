import React, {useState} from 'react'
import Avatar from 'react-avatar'
import { CiImageOn } from 'react-icons/ci'
import axios from 'axios'
import { TWEET_API } from '../utilities/Endpoints'
import toast from 'react-hot-toast'
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetslice';
import { useSelector, useDispatch } from "react-redux";

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const {user} = useSelector(store=>store.user);
  const dispatch = useDispatch();

  const submitHandler = async () => {
      try{
        const res = await axios.post(`${TWEET_API}/create`,{description, id: user?._id},{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials: true
        });
        dispatch(getRefresh());
        if(res.data.success){
          toast.success(res.data.message);
        }
      }
      catch(error){
        toast.error(error.response.data.message)
        console.log(error);
      }
  }


  return (
    <div className='w-[100%]'>
        <div>
        <div classname='flex items-center justify-evenly border-b border-gray-200'>
        <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
            <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
        </div>
        <div className='cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3'>
            <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
         </div>     
      </div>
      <div>
        <div >
            <div className='flex items-center p-4'>
            <div>
            <Avatar src='https://wallpapers.com/images/hd/anime-pfp-sad-boy-40s0vjfpa8vt3ou3.jpg' size="40" round={true} />
            </div>
            <input value={description} onChange={(e)=>setDescription(e.target.value)} className='w-full outline-none border-none text-xl ml-2' type="text" placeholder='What is happening!?'/>
            </div>
        </div>
        <div className='flex items-center justify-between p-4 border-b border-gray-300'>
            <div>
                <CiImageOn size="24px"/>
            </div>
            <button onClick={submitHandler} className='bg-[#109BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default CreatePost