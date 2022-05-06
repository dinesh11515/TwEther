import Head from 'next/head'
import Image from 'next/image'
import App from './api/App'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>TwEther</title>
        <meta name="description" content="Created by Dinesh Aitham" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <App />
    </div>
  )
}
