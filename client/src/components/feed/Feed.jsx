import { useEffect, useState } from "react";
import Post from "../post/Post.jsx";
import Share from "../share/Share.jsx";
import "./Feed.css";
import axios from "axios";

export default function Feed() {

  const [Posts, setPosts] = useState([]);

  //Here: useEffect will render after every change in [];
  //fetch posts from db
  useEffect(()=>{
    async function fetchPosts() {
      const res = await axios.get("posts/timeline/62b2eb62b0601fc7b19abf28");
      setPosts(res.data);
    };
    fetchPosts();
  },[])    //(empty => renders once only)

  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>

        {/* Mapping Posts */}

        {Posts.map((ele)=>(
          <Post key={ele._id} post={ele} />
        ))}

        </div>
    </div>
  )
}
