import React from "react";
import 'font-awesome/css/font-awesome.min.css';
export default function Header(props){
    return(
        <div className="header">
            <img src="/android-chrome-192x192.png"></img>
            <h1><i class="fa-solid fa-house-user"></i>Home</h1>
            <h1><i class="fa-solid fa-hashtag"></i>Explore</h1>
            <h1><i class="fa-solid fa-bell"></i>Notifications</h1>
            <h1><i class="fa-solid fa-envelope"></i>Messages</h1>
            <h1><i class="fa-solid fa-bookmark"></i>Bookmarks</h1>
            <h1><i class="fa-solid fa-user"></i>Profile</h1>
            <h1><i class="fa-solid fa-angles-right"></i>More</h1>
            
            <button className="connect" onClick={props.connect}>Tweet</button>
        </div>
    )
}