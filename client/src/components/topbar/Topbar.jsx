import "./Topbar.css"
import {Search, Notifications, Person, Chat} from "@material-ui/icons"

function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">WeConnect</span>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon"/>
                <input placeholder='Search for Posts, Friends and more...' className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Homepage</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">2</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Person/>
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}

export default Topbar