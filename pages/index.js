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
      await contract.tweetCreated(data)
    }
    catch(err){
      alert(err.message)
    }
    
  }
  // var counter = 0;
  //var tweetData = []
  async function getTweets(){
    const signer = await getProviderOrSigner();
    const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,signer);
    const len = (await contract.counter()).toString();
    console.log(len)
    const max_tweets = 3;
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
      //console.log(await contract.Tweets(0))
      const parsedTweet = {
        tweetId: id,
        username: tweet.user_name,
        tweetData: tweet.tweetData,
      };
      //console.log(parsedTweet)
      return parsedTweet;
    } catch (error) {
      console.error(error);
    }
  };
   function print(name,data){
    // let temp = await tweetPrint()
    // console.log(temp)
    return (
      <Tweet tweetMsg={data} tweeter={name}/>
    )
  }
  // useEffect(()=>{

  //   // const twe = oneTweet(0)
  //   // twe.then(data=>{print(data.username,data.tweetData)})
  //   for(var x in tweetData){
  //     console.log(x)
  //   }
  // },[tweetData])
  //console.log(tweetData)
  
  // const tweetPrint = async ()=>{
  //   // let tweetData = []
  //   // const twe = await oneTweet(0)
  //   // tweetData.push(twe)
  //   // setDatasTweet(tweetData)
  // }
  // useEffect(()=>{
  //   tweetPrint()
  // },[])
  
  // tweetData.forEach((person) => { console.log(person); });
  console.log(datasTweet)
  // function tweetPrint(){
  //   return(

  //   )
  // }
  // const data = [1,2,3]
  // const iterator = tweetData.values()
  // console.log(tweetData)
  // for(const value of iterator) {
  //   console.log(value);
  // }

  const tweetPrint = datasTweet.map(ele=>{
    return(
      <Tweet tweetMsg={ele.tweetData}/>
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
