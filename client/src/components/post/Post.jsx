import "./Post.css"
import {MoreVert} from "@material-ui/icons"

function Post() {
  return (
    <div className="post">
        <div className="postWrapper">

            {/* For userPic, username and Date */}
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/person/1.jpeg" alt="" className="postProfileImg" />
                    <span className="postUsername">Lisa Alen</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>

            {/* For post Content */}
            <div className="postCenter">
                <div className="postText">Hey there! It's my first post.</div>
                <img src="/assets/post/1.jpeg" alt="" className="postImg" />
            </div>

            {/* For Like, Comments and Share */}
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className="likeIcon" src="/assets/like.png" alt="" />
                    <img className="likeIcon" src="/assets/heart.png" alt="" />
                    <div className="postLikeCounter">32 People Liked this</div>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">9 Comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post