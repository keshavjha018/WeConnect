import Post from "../post/Post.jsx"
import Share from "../share/Share.jsx"
import "./Feed.css"
import {Posts} from "../../dummyData.js"

export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>

        {/* Mapping Posts */}

        {Posts.map((ele)=>(
          <Post key={ele.id} post={ele} />
        ))}

        </div>
    </div>
  )
}
