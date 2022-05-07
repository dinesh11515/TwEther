import React from "react";
// import HomeIcon from "@material-ui/icons/Home";
//import HomeIcon from '@mui/icons-material/Home';
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import ListAltIcon from "@mui/icons-material/ListAlt";
// import PermIdentityIcon from "@mui/icons-material/PermIdentity";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { FaHouseUser ,FaHashtag,FaBell,FaEnvelope,FaBookmark,FaUser,FaAngleRight} from 'react-icons/fa';

export default function Header(props){
    return(
        <div className="header">
            <img src="/android-chrome-192x192.png"></img>
            <h1><FaHouseUser />Home</h1>
            <h1><FaHashtag />Explore</h1>
            <h1><FaBell />Notifications</h1>
            <h1><FaEnvelope />Messages</h1>
            <h1><FaBookmark />Bookmarks</h1>
            <h1><FaUser />Profile</h1>
            <h1><FaAngleRight />More</h1>
            <button className="connect" onClick={props.connect}>Tweet</button>
        </div>
    )
}