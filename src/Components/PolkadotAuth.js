import React, { useState } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

const PolkadotWallet = () => {
  const [accounts, setAccounts] = useState([]);

  const handlePolkadotAuth = async () => {
    // Enable Polkadot.js extension
    const extensions = await web3Enable('My App');
    if (extensions.length === 0) {
      alert('No Polkadot extension found. Please install the Polkadot.js extension.');
      return;
    }

    // Get accounts from the extension
    const allAccounts = await web3Accounts();
    if (allAccounts.length === 0) {
      alert('No accounts found in the Polkadot extension.');
      return;
    }

    setAccounts(allAccounts);
    alert(`Connected account: ${allAccounts[0].address}`);
    <a href='/create'></a>
  };

  return (
    <div className="tf-wallet" onClick={handlePolkadotAuth}>
      <div className="icon">
        <img src="assets/images/svg/icon-wallet-20.svg" alt="Image" />
        <span className="label">BETA</span>
      </div>
      <h6 className="title">
        <a href="#">Talisman</a>
      </h6>
      <p className="content">
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
      </p>
    </div>
  );
};

export default PolkadotWallet;
