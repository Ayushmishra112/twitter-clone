import axios from "axios";
import { USER_API } from "../utilities/Endpoints";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userslice";
const useGetProfile = async (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchMyProfile = async () => {
            try{
                const res = await axios.get(`${USER_API}/profile/${id}`,{
                    withCredentials:true
                });
                // dispatch(useGetProfile(res.data.user));
                dispatch(getStranger(res.data.user));
            }
            catch(error){
                    console.log(error);
            }
        }
        fetchMyProfile();
    },[id]);
}

export default useGetProfile;