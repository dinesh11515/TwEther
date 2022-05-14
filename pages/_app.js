import '../styles/index.css'
import Layout from './api/components/layout'
import React, { useEffect } from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Login from "./api/components/login";
import { ethers,Contract, providers, utils } from "ethers";
import {
  abi,TwEther_CONTRACT_ADDRESS
} from "../constants";

function MyApp({ Component, pageProps }) {
  const [currAcount,setCurrAccount] = React.useState("")
  const [registered,setRegistered] = React.useState(false)
  const [instance,setInstance] = React.useState()
  
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        infuraId: "c42bef565b87463d836015d927a8e11b" 
      }
    }
  };
  const getProviderOrSigner = async (needSigner = false) => {
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 4) {
      window.alert("Change the network to Rinkeby");
      throw new Error("Change network to Rinkeby");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  const connect = async() => {
    try{
      const web3Modal = new Web3Modal({
        network: "testnet", 
        cacheProvider: true, 
        providerOptions 
      });
      const temp = await web3Modal.connect();

      const provider = new providers.Web3Provider(temp);
      const signer = provider.getSigner();  
      const account = await signer.getAddress();
      setCurrAccount(account);
      console.log(account)
      const contract = new Contract(TwEther_CONTRACT_ADDRESS,abi,signer);
      setInstance(contract)
      setRegistered(await contract.userRegistered(account))
      console.log(contract)
    }
    catch(err){
      alert(err)
    }
  }
  const register = async (name) => {
    try{
      const tx = await instance.register(name)
      await tx.wait()
      setRegistered(true)
    }
    catch(err){
      alert(err.message)
    }
  }

  
  return (
    <div>
      {
        currAcount != "" && registered
        ?
        <div  >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
        :
        <Login connect={connect} register={register} registered={registered} account={currAcount}/>
      }
    </div>
    
  )
}

export default MyApp
