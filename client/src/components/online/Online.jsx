import "./Online.css"

function Online({user}) {
    const publicFolderURL = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        // Online Friends
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={publicFolderURL + user.profilePicture} alt="" className="rightbarProfileImg" />

                {/* ONLINE DOT */}
                <span className="rightbarOnline"></span>
            </div>

            <span className="rightbarUsername">{user.username}</span>
        </li>
    )
}

export default Online