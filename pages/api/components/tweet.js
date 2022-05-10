import React from "react";
import {FaRegComment} from 'react-icons/fa';
import {AiOutlineRetweet,AiOutlineHeart} from 'react-icons/ai';
import {BiDownvote} from 'react-icons/bi';
import {FiShare} from 'react-icons/fi';
export default function Tweet(props){
    return(
        <div className="tweet">
            <div className="tweet_details">
                <img src="./twether_profile.jpg" className="profile_tweet"></img>
                <div>
                    <div className="name">
                        <h2 >Dinesh Aitham</h2>
                        <p>{props.tweeter}</p>
                    </div>
                    <h3 className="tweet_matter">
                        {props.tweetMsg}
                    </h3>
                </div>
            </div>
            <div className="tweet_reactions">
                <button><FaRegComment /></button>
                <button><AiOutlineRetweet /></button>
                <button><AiOutlineHeart /></button>
                <button><BiDownvote  /></button>
                <button><FiShare /></button>
                <button>Tip</button>
            </div>
        </div>
        
    )
}