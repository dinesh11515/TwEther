import React from "react";
import { useState } from "react";
export default function Login(props){
    const [details,setDetails] = useState({
        first_name : "",
        last_name : "",
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
                    <div>
                        {
                            !props.registered &&
                            <div className="register_form">
                                <input type="text" className="user_name" placeholder="First name" name="first_name" onChange={setUserDetails}></input>
                                <input type="text" className="user_name" placeholder="Last name" name="last_name" onChange={setUserDetails}></input>
                                <button className="connect" onClick={()=>props.register(details.first_name+' '+details.last_name)}>Register</button>
                            </div>
                        }   
                    </div>
                    
                    
                }
            </div>
        </div>
    )
}