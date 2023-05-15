'use client'

import ethers from 'ethers'
import Image from 'next/image'
import { useState } from 'react'

// connect metamask
// execute a function

export default function Home() {
  const [isConnected, setIsConnected] = useState(false)
  const [signer, setSigner] = useState()

  async function connect() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await ethereum.request({ method: 'eth_requestAccounts' })
        setIsConnected(true)
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        console.log(`Provider: ${provider}`)

        setSigner(provider.getSigner())
      } catch (error) {
        console.log(error)
      }
    } else {
      setIsConnected(false)
    }
  }

  console.log(`signer:${setSigner}`)

  async function execute() {
    //address +
    //contract ABI (blueprint to interact with a contract) +
    //function
    //node connection +

    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'
    const abi = [
      {
        inputs: [
          {
            internalType: 'string',
            name: '_name',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: '_favoriteNumber',
            type: 'uint256',
          },
        ],
        name: 'addPerson',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'string',
            name: '',
            type: 'string',
          },
        ],
        name: 'nameToFavoriteNumber',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'people',
        outputs: [
          {
            internalType: 'uint256',
            name: 'favoriteNumber',
            type: 'uint256',
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'retrieve',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_favoriteNumber',
            type: 'uint256',
          },
        ],
        name: 'store',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ]

    const contract = new ethers.Contract(contractAddress, abi, signer)
    try {
      await contract.store(42)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      Hello!
      <br />
      {isConnected ? (
        <>
          <p>Connected!</p>
          <button onClick={execute}>execute</button>
        </>
      ) : (
        <button onClick={connect}>connect</button>
      )}
    </div>
  )
}
