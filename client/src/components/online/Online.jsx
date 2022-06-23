import "./Online.css"

function Online({user}) {
    return (
        // Online Friends
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="" className="rightbarProfileImg" />

                {/* ONLINE DOT */}
                <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online