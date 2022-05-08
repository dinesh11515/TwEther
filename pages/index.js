import Head from 'next/head'
import Tweet from "./api/components/tweet";
import { ethers,Contract, providers, utils } from "ethers";
import {
  abi,TwEther_CONTRACT_ADDRESS
} from "../constants";
import Web3Modal from "web3modal";
export default function Home(props) {
  
  const tweet = async(data)=>{
    const web3Modal = new Web3Modal({
      network: "testnet", 
      cacheProvider: true, 
      providerOptions 
    });
    const temp = await web3Modal.connect();
  
    const provider = new providers.Web3Provider(temp);
    const signer = provider.getSigner();  
    const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,signer);
    try{
      await contract.tweetCreated(data)
    }
    catch(err){
      alert(err.message)
    }
    
  }
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
                    <input type="text" className="tweet_content" placeholder="What's happening"></input>
                </div>
                <div className="attachments">
                    <button onClick={tweet}>Tweet</button>
                </div>
                
            </div>
            <div className="tweet_feed">
                <Tweet />
            </div>
        </div>
    </div>
  )
}
