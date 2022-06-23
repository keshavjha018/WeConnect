import "./Sidebar.css";
import {RssFeed, Chat, OndemandVideo, Group,Bookmarks, ContactSupport, Work, Event, School} from "@material-ui/icons";
import {Users} from "../../dummyData.js";
import CloseFriends from "../closeFriends/CloseFriends";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            <li className="sidebarListItem">
              <OndemandVideo className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sidebarListItem">
              <Bookmarks className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmarks</span>
            </li>
            <li className="sidebarListItem">
              <ContactSupport className="sidebarIcon" />
              <span className="sidebarListItemText">FAQ</span>
            </li>
            <li className="sidebarListItem">
              <Work className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sidebarListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>

          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />

          {/* CLOSE Friends */}

          <ul className="sidebarFriendList">

            {/* Pass users to check for online */}
            {Users.map((u)=>(
              <CloseFriends key={u.id} user={u} />
            ))}

          </ul>

        </div>
      </div>
    </>
  )
}
