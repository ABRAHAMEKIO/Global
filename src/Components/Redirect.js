import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { web3Enable, web3FromSource } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api';
import '../assets/css/shortcodes.css';
import '../assets/css/responsive.css';

function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const navigate = useNavigate();

  // Check for Polkadot wallet connection on component mount
  useEffect(() => {
    const checkConnection = async () => {
      const allInjected = await web3Enable('YourAppName');
      const accounts = allInjected.length ? allInjected[0].accounts : [];
      if (accounts.length) {
        setWalletAddress(accounts[0].address);
        setIsConnected(true);
      }
    };
    checkConnection();
  }, []);

  const connectWallet = async () => {
    try {
      const allInjected = await web3Enable('YourAppName');
      if (allInjected.length === 0) {
        alert('No Polkadot extension detected');
        return;
      }

      const injector = await web3FromSource(allInjected[0].source);
      const api = await ApiPromise.create({ provider: new WsProvider('wss://rpc.polkadot.io') });
      const accounts = await injector.signer.getAccounts();

      if (accounts.length > 0) {
        setWalletAddress(accounts[0].address);
        setIsConnected(true);
        navigate('/'); // Redirect to home after successful connection
      }
    } catch (error) {
      console.error('Wallet connection failed:', error);
    }
  };

  const disconnectWallet = () => {
    setWalletAddress(null);
    setIsConnected(false);
  };

  return (
    <header className="header absolute">
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div id="site-logo" className="clearfix">
                <div id="site-logo-inner">
                  <a href="/" rel="home" className="main-logo">
                    <img
                      id="logo_header"
                      src="assets/images/logo/logo_dark2.png"
                      alt="Logo"
                    />
                  </a>
                </div>
              </div>
              <div className="header-center">
                <nav id="main-nav" className="main-nav">
                  <ul id="menu-primary-menu" className="menu">
                    <li className="menu-item"><a href="/">Home</a></li>
                    {/* Add your other menu items here */}
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                {isConnected ? (
                  <button onClick={disconnectWallet} className="tf-button">
                    <span>Disconnect Wallet</span>
                  </button>
                ) : (
                  <button onClick={connectWallet} className="tf-button">
                    <span>Connect Wallet</span>
                  </button>
                )}
                {/* Additional elements like user icon */}
              </div>
              <div className="mobile-button">
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
