import React from "react";

export default function Main(){
    return(
        <div className="main">
            <h1>Latest Tweets</h1>
            <div className="tweet_dropbox">
                <img src="./twether_profile.jpg" className="profile"></img>
                <input type="text" className="tweet_content" placeholder="What's happening"></input>
            </div>
        </div>
    )
}