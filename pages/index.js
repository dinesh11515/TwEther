import Head from 'next/head'
import Tweet from "./api/components/tweet";
import { ethers,Contract, providers, utils } from "ethers";
import {
  abi,TwEther_CONTRACT_ADDRESS
} from "../constants";
import Web3Modal from "web3modal";
import { useEffect, useRef, useState } from 'react';
export default function Home(props) {
  const [msg,setMsg] = useState("")
  const [datasTweet,setDatasTweet] = useState([])
  function setUserMsg(event){
    setMsg(event.target.value)
  }
  const getProviderOrSigner = async (needSigner = false) => {
    const web3Modal = new Web3Modal({
      network: "testnet", 
      cacheProvider: true, 
    });
    const provider = await web3Modal.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Georli");
      throw new Error("Change network to Georli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  const tweet = async(data)=>{
    const signer = await getProviderOrSigner(true);
    const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,signer);
    try{
      const tx = await contract.tweetCreated(data)
      await tx.wait()
      getTweets()

    }
    catch(err){
      alert(err.message)
    }
    
  }
  async function getTweets(){
    const signer = await getProviderOrSigner();
    const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,signer);
    const len = (await contract.counter()).toString();
    console.log(len)
    const max_tweets = 4;
    let index = 0;
    let tweetData = []
    for(let i = len-1;i>=0 && i>=len-max_tweets;i--){
      const temp = await oneTweet(i)
      tweetData.push(temp)
    }
    setDatasTweet(tweetData)
  }
  useEffect(()=>{
    getTweets()
  },[])
  
  const oneTweet = async (id) => {
    try {
      const provider = await getProviderOrSigner();
      const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,provider);
      const tweet = await contract.Tweets(id);
      const parsedTweet = {
        tweetId: id,
        username: tweet.username,
        tweetData: tweet.tweetData,
        address : tweet.tweeter,
      };
      return parsedTweet;
    } catch (error) {
      console.error(error);
    }
  };
  const tweetPrint = datasTweet.map((ele,index)=>{
    return(
      <Tweet key={index} tweetMsg={ele.tweetData} address ={ele.address} tweeter = {ele.username}/>
    )
  })
  
  return (
    <div className="body">
      <Head>
        <title>TwEther</title>
        <meta name="description" content="Created by Dinesh Aitham" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
            <div className="tweet_box">
                <h1>Latest Tweets</h1>
                <div className="tweet_dropbox">
                    <img src="./twether_profile.jpg" className="profile"></img>
                    <input type="text" className="tweet_content" placeholder="What's happening" onChange={setUserMsg}></input>
                </div>
                <div className="attachments">
                    <button onClick={()=>tweet(msg)}>Tweet</button>
                </div>
                
            </div>
            <div className="tweet_feed">
                {tweetPrint}
                
            </div>
        </div>
    </div>
  )
}
