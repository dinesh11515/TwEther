import React from "react";
import { useState } from "react";
export default function Login(props){
    const [details,setDetails] = useState({
        name : "",
        id : "",
    })
    function setUserDetails(event){
        setDetails(prevState => ({
            ...prevState,
            [event.target.name] : event.target.value
        }))
    }
    return (
        <div className="login">
            <img src="/twether-start.png" className="twitter"></img>
            <div className="login_details">
                <img src="/android-chrome-192x192.png"></img>
                <h1>What's Happening now</h1>
                <h2>Join TwEther today.</h2>
                {
                    props.account == ""
                    ?
                    <button className="connect" onClick={props.connect}>connect wallet</button>
                    :
                    <div className="register_form">
                        <input type="text" className="user_name" placeholder="name" name="name" onChange={setUserDetails}></input>
                        <input type="text" className="user_name" placeholder="Id" name="id"></input>
                        <button className="connect" onClick={()=>props.register(details.name,details.id)}>Register</button>
                    </div>
                }
            </div>
        </div>
    )
}