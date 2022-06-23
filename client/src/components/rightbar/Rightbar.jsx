import "./Rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">

          {/* BIRTHDAY CONTAINER */}
          <div className="bdayContainer">
            <img src="/assets/gift.png" alt="" className="bdayImg" />
            <span className="bdayText"><b>Alex</b> and <b>3 other</b> friends have their birthday today</span>
          </div>

          {/* ADVERTISEMENT */}
          <img src="/assets/ad.png" alt="" className="rightbarAd" />

          {/* ONLINE FRIENDS */}
          <h4 className="rightbarTitle">Online Friends</h4>

          <ul className="rightbarFriendList">
            
            {/* Pass users to check for online */}
            {Users.map(u=>(
              <Online key={u.id} user={u}/>
            ))}
            
          </ul>
        </div>
    </div>
  )
}