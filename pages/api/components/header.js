import React from "react";
import { FaHouseUser ,FaHashtag,FaBell,FaEnvelope,FaBookmark,FaUser,FaAngleRight} from 'react-icons/fa';
import {RiHome7Fill} from 'react-icons/ri'
import {CgMoreO} from 'react-icons/cg'
import Link from "./LinkElement"
export default function Header(props){
    return(
        <div className="header">
            <img src="/android-chrome-192x192.png"></img>
            <ul>
                <li><Link href="/"><a><RiHome7Fill/>Home</a></Link></li>
                <li><Link href="/about"><a><FaHashtag />Explore</a></Link></li>
                <li><Link href="/"><a><FaBell />Notifications</a></Link></li>
                <li><Link href="/"><a><FaEnvelope />Messages</a></Link></li>
                <li><Link href="/"><a><FaBookmark />Bookmarks</a></Link></li>
                <li><Link href="/"><a><FaUser />Profile</a></Link></li>
                <li><Link href="/"><a><CgMoreO />More</a></Link></li>
            </ul>
            <button className="connect" onClick={props.connect}>Tweet</button>
        </div>
    )
}