import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Login from "./components/login";
import { ethers,Contract, providers, utils } from "ethers";
import {
  abi,TwEther_CONTRACT_ADDRESS
} from "./constants";


export default function App(){
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
      console.log(contract)
    }
    catch(err){
      alert(err)
    }
  }
  if(currAcount!=""){
  instance.userRegistered(currAcount).then(data=>{
    setRegistered(data)
  })
  }
  const register = async (name,id) => {
    await instance.setDetails(name,id).then(data=>{
      if(data.status){
        setRegistered(true)
      }
      else{
        alert("Error")
      }
    })
  }
  return (

    
    <div>
      {
        currAcount != "" && registered
        ?
        <div  className="app">
          <Header connect={connect}/>
          <Main />
        </div>
        :
        <Login connect={connect} register={register} registered={registered} account={currAcount}/>
      }
    </div>
  )
}