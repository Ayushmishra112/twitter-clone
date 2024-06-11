import axios from "axios";
import { USER_API } from "../utilities/Endpoints";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/userslice";

const useGetProfile = (id) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(`${USER_API}/profile/${id}`, {
                    withCredentials: true
                });

                if (res.data && res.data.user) {
                    dispatch(getMyProfile(res.data.user));
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchProfile();
    }, [id, dispatch]);
};

export default useGetProfile;
