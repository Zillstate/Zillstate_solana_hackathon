// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png'
// import metamask from '../../Asset/MetaMask.png'
// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method

//   // Function to handle selection
//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const navigate = useNavigate();

//   const handlePayment = () => {
//     navigate('/payment'); // '/target-page' 
//   };

//   return (
//     <>
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       {/* Card Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       {/* Web3 (MetaMask) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       {/* Continue Button */}
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//     </>
//   );
// };

// export default PaymentMethod;


// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png';
// import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/solfare.png'

// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method

//   // Function to handle selection
//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const navigate = useNavigate();

//   const handlePayment = () => {
//     if (selectedMethod === 'solflare') {
//       // Redirect to Solflare wallet connection
//       window.open('https://solflare.com/access-wallet', '_blank');
//     } else if (selectedMethod === 'metamask') {
//       // Logic to connect to MetaMask (if needed)
//       navigate('/payment');
//     } else {
//       navigate('/payment'); // Proceed with card payment or other methods
//     }
//   };

//   return (
//     <>
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       {/* Card Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       {/* Web3 (MetaMask) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       {/* Web3 (Solflare) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
//         <div className="payment-web3">
//           <img src={solflare} alt="Solflare" className="icon" />
//           <span>Solflare Wallet</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
//       </div>

//       {/* Continue Button */}
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//     </>
//   );
// };

// export default PaymentMethod;





// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png';
// import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/Solflare.png'; // Add Solflare image
// import { SolflareWalletAdapter } from '@solflare-wallet/sdk'; // Import Solflare SDK

// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method
//   const [walletAddress, setWalletAddress] = useState(''); // Store the connected wallet address

//   // Function to handle selection
//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const navigate = useNavigate();

//   // Handle Solflare wallet connection
//   const connectSolflareWallet = async () => {
//     const solflare = new SolflareWalletAdapter();
    
//     try {
//       await solflare.connect();
//       if (solflare.connected) {
//         setWalletAddress(solflare.publicKey.toString()); // Set the connected wallet address
//         console.log('Connected to Solflare wallet:', solflare.publicKey.toString());
//         // You can navigate to the payment page or perform further actions
//         navigate('/payment'); 
//       }
//     } catch (error) {
//       console.error('Failed to connect to Solflare wallet', error);
//     }
//   };

//   const handlePayment = () => {
//     if (selectedMethod === 'solflare') {
//       connectSolflareWallet(); // Connect to Solflare wallet when selected
//     } else if (selectedMethod === 'metamask') {
//       // Logic to connect to MetaMask (if needed)
//       navigate('/payment');
//     } else {
//       navigate('/payment'); // Proceed with card payment or other methods
//     }
//   };

//   return (
//     <>
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       {/* Card Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       {/* Web3 (MetaMask) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       {/* Web3 (Solflare) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
//         <div className="payment-web3">
//           <img src={solflare} alt="Solflare" className="icon" />
//           <span>Solflare Wallet</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
//       </div>

//       {/* Display connected wallet address */}
//       {walletAddress && (
//         <p>Connected Wallet: {walletAddress}</p>
//       )}

//       {/* Continue Button */}
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//     </>
//   );
// };

// export default PaymentMethod;




// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png';
// import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/solfare.png';
// // import { SolflareWalletAdapter } from '@solflare-wallet/sdk';
// import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';


// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method
//   const [walletAddress, setWalletAddress] = useState(''); // Store connected wallet address
//   // const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false); // Track MetaMask installation

//   // // Check if MetaMask is installed
//   // React.useEffect(() => {
//   //   if (window.ethereum) {
//   //     setIsMetaMaskInstalled(true);
//   //   }
//   // }, []);

//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const navigate = useNavigate();

//   // Handle MetaMask wallet connection
//   const connectMetaMaskWallet = async () => {
//     if (!window.ethereum) {
//       alert('MetaMask is not installed. Please install it to proceed.');
//       return;
//     }

//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const walletAddress = accounts[0];
//       setWalletAddress(walletAddress);
//       console.log('Connected to MetaMask:', walletAddress);
//       // Continue with the payment process
//       navigate('/payment');
//     } catch (error) {
//       console.error('Failed to connect to MetaMask', error);
//     }
//   };

//   // Handle Solflare wallet connection
//   const connectSolflareWallet = async () => {
//     const solflare = new SolflareWalletAdapter();

//     try {
//       await solflare.connect();
//       if (solflare.connected) {
//         setWalletAddress(solflare.publicKey.toString());
//         console.log('Connected to Solflare wallet:', solflare.publicKey.toString());
//         navigate('/payment');
//       }
//     } catch (error) {
//       console.error('Failed to connect to Solflare wallet', error);
//     }
//   };

//   const handlePayment = () => {
//     if (selectedMethod === 'solflare') {
//       connectSolflareWallet();
//     } else if (selectedMethod === 'metamask') {
//       connectMetaMaskWallet();
//     } else {
//       navigate('/payment'); // Proceed with card payment or other methods
//     }
//   };

//   return (
//     <>
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       {/* Card Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       {/* Web3 (MetaMask) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       {/* Web3 (Solflare) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
//         <div className="payment-web3">
//           <img src={solflare} alt="Solflare" className="icon" />
//           <span>Solflare Wallet</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
//       </div>

//       {/* Display connected wallet address */}
//       {walletAddress && (
//         <p>Connected Wallet: {walletAddress}</p>
//       )}

//       {/* Continue Button */}
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//     </>
//   );
// };

// export default PaymentMethod;




// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png';
// import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/solfare.png';

// // Solana wallet adapter imports
// import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
// import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
// import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { Connection, clusterApiUrl } from '@solana/web3.js';
// import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for Solana wallet modal

// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method
//   const [walletAddress, setWalletAddress] = useState(''); // Store connected wallet address
  
//   // Wallet setup
//   const wallet = useWallet();
  
//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const navigate = useNavigate();

//   // Handle MetaMask wallet connection
//   const connectMetaMaskWallet = async () => {
//     if (!window.ethereum) {
//       alert('MetaMask is not installed. Please install it to proceed.');
//       return;
//     }

//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const walletAddress = accounts[0];
//       setWalletAddress(walletAddress);
//       console.log('Connected to MetaMask:', walletAddress);
//       navigate('/payment');
//     } catch (error) {
//       console.error('Failed to connect to MetaMask', error);
//     }
//   };

//   // Handle Solflare wallet connection
//   const connectSolflareWallet = async () => {
//     try {
//       if (!wallet.connected) {
//         wallet.connect();
//       }
//       const publicKey = wallet.publicKey.toString();
//       setWalletAddress(publicKey);
//       console.log('Connected to Solflare wallet:', publicKey);
//       navigate('/payment');
//     } catch (error) {
//       console.error('Failed to connect to Solflare wallet', error);
//     }
//   };

//   const handlePayment = () => {
//     if (selectedMethod === 'solflare') {
//       connectSolflareWallet();
//     } else if (selectedMethod === 'metamask') {
//       connectMetaMaskWallet();
//     } else {
//       navigate('/payment');
//     }
//   };

//   return (
//     <>
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       {/* Card Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       {/* Web3 (MetaMask) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       {/* Web3 (Solflare) Payment Option */}
//       <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
//         <div className="payment-web3">
//           <img src={solflare} alt="Solflare" className="icon" />
//           <span>Solflare Wallet</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
//       </div>

//       {/* Display connected wallet address */}
//       {walletAddress && (
//         <p>Connected Wallet: {walletAddress}</p>
//       )}

//       {/* Solana Wallet Connection */}
//       <div className="wallet-connection">
//         <WalletMultiButton /> {/* This button will handle wallet connection */}
//       </div>

//       {/* Continue Button */}
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//     </>
//   );
// };

// // Wrap the component with the WalletProvider to enable Solana wallets
// const PaymentMethodWrapper = () => {
//   const endpoint = clusterApiUrl('mainnet-beta'); // Solana network endpoint
//   const wallets = [new SolflareWalletAdapter(), new PhantomWalletAdapter()];

//   return (
//     <WalletProvider wallets={wallets} autoConnect>
//       <WalletModalProvider>
//         <PaymentMethod />
//       </WalletModalProvider>
//     </WalletProvider>
//   );
// };

// export default PaymentMethodWrapper;



import React, { useState } from 'react';
import './PaymentMethod.css'; 
import { useNavigate } from 'react-router-dom';
import visa from '../../Asset/Visa.png';
import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/solflare.png';

// Solana wallet adapter imports
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Connection, clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for Solana wallet modal
import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for Solana wallet modal

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState(''); // Track selected method
  const [walletAddress, setWalletAddress] = useState(''); // Store connected wallet address
  
  // Wallet setup
  const wallet = useWallet();
  
  const handleSelect = (method) => {
    setSelectedMethod(method);
  };

  const navigate = useNavigate();

  // Handle MetaMask wallet connection
  const connectMetaMaskWallet = async () => {
    if (!window.ethereum) {
      alert('MetaMask is not installed. Please install it to proceed.');
      return;
    }

    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const walletAddress = accounts[0];
      setWalletAddress(walletAddress);
      console.log('Connected to MetaMask:', walletAddress);
      navigate('/payment');
    } catch (error) {
      console.error('Failed to connect to MetaMask', error);
    }
  };

  // Handle Solflare wallet connection
  const connectSolflareWallet = async () => {
    try {
      if (!wallet.connected) {
        wallet.connect();
      }
      const publicKey = wallet.publicKey.toString();
      setWalletAddress(publicKey);
      console.log('Connected to Solflare wallet:', publicKey);
      navigate('/payment');
    } catch (error) {
      console.error('Failed to connect to Solflare wallet', error);
    }
  };

  const handlePayment = () => {
    if (selectedMethod === 'solflare') {
      connectSolflareWallet();
    } else if (selectedMethod === 'metamask') {
      connectMetaMaskWallet();
    } else {
      navigate('/payment');
    }
  };

  return (
    <>
    <div className="payment-container">
      <h2>Choose payment method</h2>
      
      {/* Card Payment Option */}
      <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
        <div className="payment-card">
          <img src={visa} alt="Visa" className="icon" />
          <span>9028 **** ****</span>
        </div>
        <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
      </div>
      
      {/* Web3 (MetaMask) Payment Option */}
      <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
        <div className="payment-web3">
          <img src={metamask} alt="MetaMask" className="icon" />
          <span>MetaMask</span>
        </div>
        <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
      </div>
      
      {/* Web3 (Solflare) Payment Option */}
      {/* <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
        <div className="payment-web3">
          <img src={solflare} alt="Solflare" className="icon" />
          <span>Solflare Wallet</span>
        </div>
        <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
      </div> */}

      {/* Display connected wallet address */}
      {walletAddress && (
        <p>Connected Wallet: {walletAddress}</p>
      )}

      {/* Solana Wallet Connection */}
      <div className="wallet-connection">
        <WalletMultiButton /> {/* This button will handle wallet connection */}
      </div>

      {/* Continue Button */}
      <button className="continue-button" onClick={handlePayment}>Continue</button>
    </div>
    </>
  );
};

// Wrap the component with the WalletProvider to enable Solana wallets
const PaymentMethodWrapper = () => {
  const endpoint = clusterApiUrl('mainnet-beta'); // Solana network endpoint
  const wallets = [new SolflareWalletAdapter(), new PhantomWalletAdapter()];


  return (
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <PaymentMethod />
      </WalletModalProvider>
    </WalletProvider>
  );
};

export default PaymentMethodWrapper;



// import React, { useState } from 'react';
// import './PaymentMethod.css'; 
// import { useNavigate } from 'react-router-dom';
// import visa from '../../Asset/Visa.png';
// import metamask from '../../Asset/MetaMask.png';
// import solflare from '../../Asset/solflare.png';

// // Solana wallet adapter imports
// import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
// import { SolflareWalletAdapter } from '@solana/wallet-adapter-solflare';
// import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
// import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
// import { Connection, clusterApiUrl } from '@solana/web3.js';
// // import { MetaMaskWalletAdapter } from '@web3-onboard/metamask'; // Import MetaMask Wallet adapter
// import '@solana/wallet-adapter-react-ui/styles.css'; // Default styles for Solana wallet modal

// const PaymentMethod = () => {
//   const [selectedMethod, setSelectedMethod] = useState('');
//   const [walletAddress, setWalletAddress] = useState('');
  
//   const wallet = useWallet();
//   const navigate = useNavigate();

//   const handleSelect = (method) => {
//     setSelectedMethod(method);
//   };

//   const connectMetaMaskWallet = async () => {
//     if (!window.ethereum) {
//       alert('MetaMask is not installed. Please install it to proceed.');
//       return;
//     }

//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       const walletAddress = accounts[0];
//       setWalletAddress(walletAddress);
//       console.log('Connected to MetaMask:', walletAddress);
//       navigate('/payment');
//     } catch (error) {
//       console.error('Failed to connect to MetaMask', error);
//     }
//   };

//   const connectSolflareWallet = async () => {
//     try {
//       if (!wallet.connected) {
//         await wallet.connect();
//       }
//       const publicKey = wallet.publicKey.toString();
//       setWalletAddress(publicKey);
//       console.log('Connected to Solflare wallet:', publicKey);
//       navigate('/payment');
//     } catch (error) {
//       console.error('Failed to connect to Solflare wallet', error);
//     }
//   };

//   const handlePayment = () => {
//     if (selectedMethod === 'solflare') {
//       connectSolflareWallet();
//     } else if (selectedMethod === 'metamask') {
//       connectMetaMaskWallet();
//     } else {
//       navigate('/payment');
//     }
//   };

//   return (
//     <div className="payment-container">
//       <h2>Choose payment method</h2>
      
//       <div className={`payment-option ${selectedMethod === 'card' ? 'selected' : ''}`} onClick={() => handleSelect('card')}>
//         <div className="payment-card">
//           <img src={visa} alt="Visa" className="icon" />
//           <span>9028 **** ****</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'card'} readOnly />
//       </div>
      
//       <div className={`payment-option ${selectedMethod === 'metamask' ? 'selected' : ''}`} onClick={() => handleSelect('metamask')}>
//         <div className="payment-web3">
//           <img src={metamask} alt="MetaMask" className="icon" />
//           <span>MetaMask</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'metamask'} readOnly />
//       </div>
      
//       <div className={`payment-option ${selectedMethod === 'solflare' ? 'selected' : ''}`} onClick={() => handleSelect('solflare')}>
//         <div className="payment-web3">
//           <img src={solflare} alt="Solflare" className="icon" />
//           <span>Solflare Wallet</span>
//         </div>
//         <input type="checkbox" checked={selectedMethod === 'solflare'} readOnly />
//       </div>

//       {walletAddress && <p>Connected Wallet: {walletAddress}</p>}
//       <div className="wallet-connection">
//         <WalletMultiButton />
//       </div>
//       <button className="continue-button" onClick={handlePayment}>Continue</button>
//     </div>
//   );
// };

// const PaymentMethodWrapper = () => {
//   const endpoint = clusterApiUrl('mainnet-beta');
//   const wallets = [
//     new SolflareWalletAdapter(),
//     new PhantomWalletAdapter(),
//     // new MetaMaskWalletAdapter(), // Ensure MetaMask is added here
//   ];

//   return (
//     <WalletProvider wallets={wallets} autoConnect>
//       <WalletModalProvider>
//         <PaymentMethod />
//       </WalletModalProvider>
//     </WalletProvider>
//   );
// };

// export default PaymentMethodWrapper;
