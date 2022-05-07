import React from "react";
import Tweet from "./tweet";

export default function Main(){
    return(
        <div className="main">
            <div className="tweet_box">
                <h1>Latest Tweets</h1>
                <div className="tweet_dropbox">
                    <img src="./twether_profile.jpg" className="profile"></img>
                    <input type="text" className="tweet_content" placeholder="What's happening"></input>
                </div>
                <div className="attachments">
                    <button>Tweet</button>
                </div>
                
            </div>
            <div className="tweet_feed">
                <Tweet />
            </div>
        </div>
    )
}