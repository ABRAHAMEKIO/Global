import React, { useState } from 'react';
import { web3Accounts, web3Enable } from '@polkadot/extension-dapp';

const PolkadotWallet = () => {
  const [accounts, setAccounts] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePolkadotAuth = async () => {
    try {
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
      setIsAuthenticated(true);
      alert(`Connected account: ${allAccounts[0].address}`);
    } catch (error) {
      console.error('Error connecting to Polkadot wallet:', error);
      alert('An error occurred while connecting to the Polkadot wallet.');
    }
  };

  const handleDisconnect = () => {
    setAccounts([]);
    setIsAuthenticated(false);
  };

  return (
    <div className="tf-wallet">
      {isAuthenticated ? (
        <div>
          <div className="icon">
            <img src="assets/images/svg/icon-wallet-20.svg" alt="Wallet Icon" />
            <span className="label">BETA</span>
          </div>
          <h6 className="title">
            <a href="#">Talisman</a>
          </h6>
          <p className="content">
            Connected account: {accounts[0].address}
          </p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <div onClick={handlePolkadotAuth} className="connect-button">
          <div className="icon">
            <img src="assets/images/svg/icon-wallet-20.svg" alt="Wallet Icon" />
            <span className="label">BETA</span>
          </div>
          <h6 className="title">
            <a href="#">Talisman</a>
          </h6>
          <p className="content">
            Enter a New World of Music with Talisman Wallet – the #1 multichain wallet. Seamlessly buy, listen, and trade music NFTs while securely managing your digital assets. Unlock a unique musical experience where blockchain and creativity come together, all within the safety of Talisman.
          </p>
          <button onClick={handlePolkadotAuth}>Connect Wallet</button>
        </div>
      )}
    </div>
  );
};

export default PolkadotWallet;
