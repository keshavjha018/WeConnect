import "./Profile.css"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

function Profile() {
    return (
        <>
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        {/* Cover & Profile Pic */}
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                            <img src="/assets/person/7.jpeg" alt="" className="profileUserImg" />
                        </div>

                        <div className="profileInfo">
                            <h4 className="profileInfoName">Lisa Alex</h4>
                            <span className="profileInfoDesc">This is bio section of the user Lisa</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile