import axios from "axios";
import { USER_API } from "../utilities/Endpoints";
import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {  getOtherUsers } from "../redux/userslice";

const useOtherUsers = (id) => {
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchOtherUsers = async () => {
            try {
                const res = await axios.get(`${USER_API}/stranger/${id}`,{
                    withCredentials:true
                });
                console.log(res);
                dispatch(getOtherUsers(res.data.otherUsers));
            } catch (error) {
                console.log(error);
            }
        }
        fetchOtherUsers();
    },[]);
};
export default useOtherUsers;