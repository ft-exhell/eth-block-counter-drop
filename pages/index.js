import React, { useState } from "react";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider('https://eth-mainnet.g.alchemy.com/v2/' + process.env.NEXT_PUBLIC_ALCHEMY_KEY)
const target  = 16890400;

export default function App() {
  const [blockNumber, setBlockNumber] = useState(undefined);

  const getBlocknumber = async function() {
    const data = await provider.getBlock();
    setBlockNumber(data.number);
  }

  setInterval(getBlocknumber, 10000);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
        <h1>Current Ethereum Block:</h1>
        {blockNumber && <h1>{blockNumber.toString()}</h1>}
        {!blockNumber && <h1>Loading...</h1>}
        {blockNumber && (blockNumber < target ? <h2>The claim is <span style={{color: 'red'}}>NOT</span> open.</h2> : <h2 style={{color: 'green'}}>The claim is open.</h2>)}
    </div>
  )
}