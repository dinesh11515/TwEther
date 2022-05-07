export const abi = [
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
  ]

export const TwEther_CONTRACT_ADDRESS = "0x98F6b74cCcD8AbDd09cd9B200D2Fe336049C818A"