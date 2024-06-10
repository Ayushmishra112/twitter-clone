import React, { useState } from "react";
import axios from "axios";
import { USER_API } from "../utilities/Endpoints";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../redux/userslice";


const Login = () => {
  const[islogin,setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(islogin){
      try{
        const res = await axios.post(`${USER_API}/login`, { email, password},{
          headers: {
            'Content-Type': "application/json"
          },
          withCredentials: true
        });
        dispatch(getUser(res?.data?.user));
        if(res.data.success){
          navigate("/");
          toast.success(res.data.message);
        }

    }
    catch(error){
      toast.success(error.response.data.message);
        console.log(error);
    }
    }
    else{
      try{
          const res = await axios.post(`${USER_API}/register`, {name, username, email, password},{
            headers:{'content-Type':"application/json"
            },
            withCredentials:true
          });
          if(res.data.success){
            setIsLogin(true)
            toast.success(res.data.message);
          }
      }
      catch(error){
        toast.success(error.response.data.message);
        console.log(error);
      }
    }
  }

  const loginSignupHandler = () => {
    setIsLogin(!islogin);
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
       <div className="absolute top-16 right-14 pr-4 pt-4">
        <h1 className="font-bold text-7xl">Happening now.</h1>
      </div>
      <div className="absolute top-44 right-16 pr-4 pt-4">
        <h1 className="font-bold text-4xl">join today.</h1>
      </div>
      <div className="flex items-center justify-around w-[70%]">
        <div>
          <img
            className="ml-5"
            width={"250px"}
            src="https://www.edigitalagency.com.au/wp-content/uploads/new-Twitter-logo-x-black-png-294x300.png"
          ></img>
        </div>
        <div className="mt-12">
          
        <h1 className='mt-4 mb-2 text-2xl font-bold'>{islogin ? "Login" : "Register"}</h1>
        <form onSubmit={submitHandler} className="flex flex-col w-55%">
          {
            !islogin && (<>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Username" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
            </>)
          }
          
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-1 font-semibold" />
          <button className='bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white'>{islogin ? "Login" : "Create Account"}</button>
          <h1>{islogin ? "Do not have an account? " : "Already have an account?"} <span onClick={loginSignupHandler} className='font-bold text-blue-600 cursor-pointer'>{islogin ? "Register" : "Login"}</span></h1>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
