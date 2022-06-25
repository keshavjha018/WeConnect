import "./Post.css"
import {MoreVert} from "@material-ui/icons"
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import {format} from "timeago.js";

export default function Post({post}) {

    const [User, setUser] = useState({});

    //fetch user from db via api
    useEffect(()=>{
        async function fetchUser(){
            const res = await axios.get(`users/${post.userId}`);
            setUser(res.data);
        };
        fetchUser();
    },[post.userId])    //dependency=> useEffect reRender on change of userId

    //const user = Users.filter(u=>u.id === 1)  // from "Users Array" filter user objects in which Id=1
    //console.log(user[0].username);            //print username from that obj

    //Like Button Logic
    const [Like, setLike] = useState(post.likes.length)
    const [IsLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(IsLiked? Like-1 : Like+1)   //if already liked => decrement else increase by 1
        setIsLiked(!IsLiked)                 //set IsLiked to oppostie
    }

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="post">
        <div className="postWrapper">

            {/* For userPic, username and Date */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={User.profilePic || PF + "person/default.jpg"} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {User.username}
                    </span>
                    <span className="postDate">{format(post.createdAt)}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            {/* For post Content */}
            <div className="postCenter">
                <div className="postText">{post.description}</div>
                <img src={PF + post.img} alt="" className="postImg" />
            </div>

            {/* For Like, Comments and Share */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={likeHandler} className="likeIcon" src={`${PF}like.png`} alt="" />
                    <img onClick={likeHandler} className="likeIcon" src={`${PF}heart.png`} alt="" />
                    <div className="postLikeCounter">{Like} People Liked this</div>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} Comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}