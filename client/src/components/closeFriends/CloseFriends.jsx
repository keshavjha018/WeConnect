import "./CloseFriends.css"

function CloseFriends({user}) {
    const publicFolderURL = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
            <img src={publicFolderURL + user.profilePicture} alt="" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends