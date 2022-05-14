import React from "react";

export default function Footer(){
    return(
        <div>
            <div className="happening">
                <h1>What's happening</h1>
            </div>
            <div className="happening follow">
                <h1>Who to follow</h1>
                <div className="account">
                    <img src="./dinesh.jpg"></img>
                    <div className="account_details">
                        <h1>Dinesh Aitham</h1>
                        <h2>@dineshaitham1</h2>
                    </div>
                    <button onClick={() => window.open("https://twitter.com/dineshaitham1")}>follow</button>
                </div>
            </div>
        </div>
       
    )
}