import React from "react";
import Header from "./components/header";
import Main from "./components/main";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Login from "./components/login";


export default function App(){
  const [currAcount,setCurrAccount] = React.useState("")
  const [registered,setRegistered] = React.useState(false)
  const [instance,setInstance] = React.useState(null)
  
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, 
      options: {
        infuraId: "c42bef565b87463d836015d927a8e11b" 
      }
    }
  };
  const connect = async() => {
    try{
      const web3Modal = new Web3Modal({
        network: "testnet", 
        cacheProvider: true, 
        providerOptions 
      });
      const provider = await web3Modal.connect();
      const web3 = new Web3(provider);
      const accounts = await web3.eth.getAccounts();
      setCurrAccount(accounts[0]);

      const contract = new web3.eth.Contract([
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_userId",
              "type": "string"
            }
          ],
          "name": "setDetails",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userDetails",
          "outputs": [
            {
              "internalType": "string",
              "name": "user_name",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "user_id",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "userRegistered",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ],'0xC3ad6d74b18537b8Be35b5114332e55DAf4c56aC')
      setInstance(contract)
      
    }
    catch(err){
      console.log(err)
    }
  }
  if(currAcount!=""){
  instance.methods.userRegistered(currAcount).call().then(data=>{
    setRegistered(data)
  })
}
  const register = async (name,id) => {
    await instance.methods.setDetails(name,id).send({from:currAcount}).then(data=>{
      if(data.status){
        alert("Registerd")
      }
      else{
        alert("Error")
      }
    })
  }
  return (

    // <
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