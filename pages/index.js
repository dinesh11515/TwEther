import Head from 'next/head'
import Image from 'next/image'
import App from './api/App'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Dinesh Aitham" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://kit.fontawesome.com/68fd92e246.js" crossOrigin="anonymous"></Script>
      </Head>
      <App />
    </div>
  )
}
