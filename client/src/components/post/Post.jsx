import "./Post.css"
import {MoreVert} from "@material-ui/icons"
import {Users} from "../../dummyData.js"
import { useState } from "react"

export default function Post({post}) {

    //const user = Users.filter(u=>u.id === 1)  // from "Users Array" filter user objects in which Id=1
    //console.log(user[0].username);            //print username from that obj

    //Like Button Logic
    const [Like, setLike] = useState(post.like)
    const [IsLiked, setIsLiked] = useState(false)

    const likeHandler =()=>{
        setLike(IsLiked? Like-1 : Like+1)   //if already liked => decrement else increase by 1
        setIsLiked(!IsLiked)                 //set IsLiked to oppostie
    }

  return (
    <div className="post">
        <div className="postWrapper">

            {/* For userPic, username and Date */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {Users.filter(u=>u.id === post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            {/* For post Content */}
            <div className="postCenter">
                <div className="postText">{post?.desc}</div>
                <img src={post.photo} alt="" className="postImg" />
            </div>

            {/* For Like, Comments and Share */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img onClick={likeHandler} className="likeIcon" src="/assets/like.png" alt="" />
                    <img onClick={likeHandler} className="likeIcon" src="/assets/heart.png" alt="" />
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