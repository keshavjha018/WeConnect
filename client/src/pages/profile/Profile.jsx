import "./Profile.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router";

function Profile() {

    const [user, setUser] = useState({});

    const USERNAME = useParams().username;

    //fetch user from db via api
    useEffect(()=>{
        async function fetchUser(){
            const res = await axios.get(`/users?username=${USERNAME}`);
            setUser(res.data);
        };
        fetchUser();
    },[USERNAME])


    return (
        <>
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        {/* Cover & Profile Pic */}
                        <div className="profileCover">
                            <img src={user.coverPic || "/assets/default-cover.jpg"} alt="" className="profileCoverImg" />
                            <img src={user.profPic || "/assets/person/default.jpg"} alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">{user.username}</h4>
                            <span className="profileInfoDesc">{user.about}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={USERNAME}/>
                        <Rightbar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile