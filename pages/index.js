import Head from 'next/head'
import Tweet from "./api/components/tweet";
export default function Home() {
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
                    <button>Tweet</button>
                </div>
                
            </div>
            <div className="tweet_feed">
                <Tweet />
            </div>
        </div>
    </div>
  )
}
