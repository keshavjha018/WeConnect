import "./Rightbar.css"

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
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />

                {/* ONLINE DOT */}
                <span className="rightbarOnline"></span>
              </div>
              
              <span className="rightbarUsername">John Doe</span>
            </li>
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="/assets/person/3.jpeg" alt="" className="rightbarProfileImg" />

                {/* ONLINE DOT */}
                <span className="rightbarOnline"></span>
              </div>

              <span className="rightbarUsername">John Doe</span>
            </li>
            
          </ul>
        </div>
    </div>
  )
}