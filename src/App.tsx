import { Keypair } from "@solana/web3.js";
import React, { ReactEventHandler, useEffect, useMemo, useState } from "react";

import { Betting, IDL } from "./idl";

import * as anchor from "@project-serum/anchor";
import { Body } from "./Body";

function App() {
  const accountTypes = IDL.accounts.map((acc) => acc.name);

  const wallet = new anchor.Wallet(Keypair.generate());
  const connection = new anchor.web3.Connection(
    // "https://api.mainnet-beta.solana.com",
    // "https://ssc-dao.genesysgo.net",
    "https://api.devnet.solana.com",
    {
      commitment: "processed",
    }
  );

  const provider = new anchor.Provider(connection, wallet, {
    skipPreflight: false,
  });

  const betting = new anchor.Program<Betting>(
    IDL,
    "FqwBEMn1LsPqkFJoAwBGvQutDGbZuU1TRrhTioPiXLQg",
    provider
  );

  const [states, setStates] = useState<any>();
  const [selectedState, setSelectedState] = useState<any>(accountTypes[0]);

  const cacheStates = useMemo(() => new Map(), []);

  useEffect(() => {
    async function fetchStates() {
      const index = IDL.accounts.findIndex((a) => a.name == selectedState);
      console.log("index =", index);
      
      console.log("selectedState =", selectedState);
      console.log("IDL.accounts =", IDL.accounts);
      console.log("IDL.accounts[index] =", IDL.accounts[index]);
      const accClient = new anchor.AccountClient(
        IDL,
        IDL.accounts[index],
        betting.programId,
        provider
      );

      const data = await accClient.all();

      cacheStates.set(selectedState, data);
      setStates(data);
    }

    const cachedState = cacheStates.get(selectedState);
    console.log(cachedState, " cache");
    if (!cachedState) {
      fetchStates();
    }
    setStates(cachedState);
  }, [selectedState]);

  const userSelectState = (e: any) => {
    setSelectedState(e.target.value);
  };

  return (
    <div className="App">
      <h1>States</h1>
      <Body
        userSelectState={userSelectState}
        states={states}
        selectedState={selectedState}
      />
    </div>
  );
}

export default App;
