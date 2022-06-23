import Post from "../post/Post.jsx"
import Share from "../share/Share.jsx"
import "./Feed.css"


export default function Feed() {
  return (
    <div className="feed">
        <div className="feedWrapper">
          <Share/>

          <Post />
          <Post />
          <Post />

        </div>
    </div>
  )
}
