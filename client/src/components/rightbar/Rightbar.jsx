import "./Rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online"

export default function Rightbar({user}) {

  const pubFolURL = process.env.REACT_APP_PUBLIC_FOLDER;

  //Two Faces of RightBar
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    )
  }

  const ProfileRightbar=()=>{
    return (
      <>
        <h4 className="rightbarTitle">About Me</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship===1 ? "Single" : "Married"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/1.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/2.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/3.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/4.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/5.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
          <div className="rightbarFollowing">
            <img src={`${pubFolURL}person/6.jpeg`} alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">John Wick</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="rightbar">
        <div className="rightbarWrapper">

          {/* If Props "profile" is passed then shows ProfileRightbar else HomeRightbar */}
          {user? <ProfileRightbar /> : <HomeRightbar />}

        </div>
    </div>
  )
}