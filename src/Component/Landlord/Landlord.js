import React, { useState } from 'react';
import './Landlord.css';
import { useNavigate } from 'react-router-dom';

const Landlord = () => {

  const navigate = useNavigate();
  const HandleApply = () => {
    navigate('/application'); // '/target-page'
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    apartment: '',
    image1: null,
    image2: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image1' || name === 'image2') {
      setFormData({
        ...formData,
        [name]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="landlord">
      <h2>Sign Up as a Landlord</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        <label>List an Apartment</label>
        <input
          type="text"
          name="apartment"
          value={formData.apartment}
          onChange={handleChange}
          placeholder="Enter apartment details"
        />

        <div className="image-section">
          <input type="file" name="image1" onChange={handleChange} />
          <input type="file" name="image2" onChange={handleChange} />
        </div>

        <button className="mint-nft-btn">Mint as NFT</button>
        <button type="submit" className="submit-btn" onClick={HandleApply}>Sign Up</button>
      </form>
    </div>
  );
};

export default Landlord;




// import React, { useState } from 'react';
// import './Landlord.css';
// import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';
// // import { Metaplex, keypairIdentity } from '@metaplex/js';
// // import { useWallet } from '@solana/wallet-adapter-react'; // Assuming you're using Solana Wallet Adapter
// import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';
// import { clusterApiUrl, Connection, PublicKey } from '@solana/web3.js';


// const Landlord = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

//   const { publicKey, signTransaction } = useWallet(); // Wallet connection

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   const mintNFT = async () => {
//     if (!publicKey) {
//       alert('Please connect your wallet!');
//       return;
//     }

//     // Create a connection to the Solana devnet
//     const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

//     // Create an instance of Metaplex
//     const metaplex = Metaplex.make(connection).use(keypairIdentity(publicKey));

//     // Define NFT metadata
//     const nftMetadata = {
//       name: formData.name,
//       symbol: 'LANDLORD',
//       uri: 'https://your-metadata-url.com', // A URL to the metadata JSON hosted on Arweave or IPFS
//       sellerFeeBasisPoints: 500, // 5% royalty fee
//       creators: [{ address: publicKey.toBase58(), share: 100 }],
//     };

//     try {
//       // Mint the NFT using Metaplex
//       const { nft } = await metaplex.nfts().create(nftMetadata);

//       console.log('NFT Minted:', nft);
//       alert(`NFT Minted! Check transaction on Solana explorer.`);
//     } catch (error) {
//       console.error('Error minting NFT:', error);
//       alert('Failed to mint NFT.');
//     }
//   };

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button
//           type="button"
//           className="mint-nft-btn"
//           onClick={mintNFT}
//         >
//           Mint as NFT
//         </button>
//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;


// import React, { useState } from 'react';
// import './Landlord.css';
// // import { Connection, clusterApiUrl } from '@solana/web3.js';
// // import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';
// // import { Metaplex } from "@metaplex-foundation/js";
// // import { Connection, clusterApiUrl } from "@solana/web3.js";
// // import { useWallet } from '@solana/wallet-adapter-react'; // Ensure you're using the Solana Wallet Adapter
// import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
// import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

// const Landlord = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

  

//   const { publicKey, wallet } = useWallet(); // Wallet connection

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   const mintNFT = async () => {
//     if (!publicKey) {
//       alert('Please connect your wallet!');
//       return;
//     }

//     // Create a connection to the Solana devnet
//     // const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
//     const connection = new Connection(clusterApiUrl("mainnet-beta"));
// const wallet = Keypair.generate();

//     // Initialize Metaplex
//     // const metaplex = Metaplex.make(connection)
//     //   .use(walletAdapterIdentity(wallet)) // Use wallet adapter identity
//     //   .use(bundlrStorage()); // For storing the metadata

//     const metaplex = Metaplex.make(connection)
//     .use(keypairIdentity(wallet))
//     .use(bundlrStorage());

//     try {
//       // Upload image and metadata to IPFS/Arweave
//       const { uri } = await metaplex.nfts().uploadMetadata({
//         name: formData.name,
//         symbol: 'LANDLORD',
//         description: 'A property listed by a landlord.',
//         image: formData.image1, // Assuming image1 is the file for NFT
//       });

//       // Mint the NFT
//       const { nft } = await metaplex.nfts().create({
//         uri: "https://arweave.net/123",
//         name: formData.name,
//         sellerFeeBasisPoints: 500, // 5% royalty
//         symbol: 'LANDLORD',
//         creators: [{ address: publicKey.toBase58(), share: 100 }],
//       });

//       console.log('NFT Minted:', nft);
//       alert(`NFT Minted! Check it on Solana Explorer.`);
//     } catch (error) {
//       console.error('Error minting NFT:', error);
//       alert('Failed to mint NFT.');
//     }
//   };


//   const mintAddress = new PublicKey("ATe3DymKZadrUoqAMn7HSpraxE4gB88uo1L9zLGmzJeL");

// const nft = await metaplex.nfts().findByMint({ mintAddress });
  
// const bundlrStorage = metaplex.storage().driver() as BundlrStorageDriver;

// bundlrStorage.fund([metaplexFile1, metaplexFile2]); // Fund using file size.
// bundlrStorage.fund(1000); // Fund using byte size.
// (await bundlrStorage.bundlr()).fund(1000); // Fund using lamports directly.

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button
//           type="button"
//           className="mint-nft-btn"
//           onClick={mintNFT}
//         >
//           Mint as NFT
//         </button>
//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;


// import React, { useState } from 'react';
// import './Landlord.css';
// import { Metaplex, walletAdapterIdentity, bundlrStorage } from '@metaplex-foundation/js';
// import { Connection, clusterApiUrl } from '@solana/web3.js';
// import { useWallet } from '@solana/wallet-adapter-react';

// const Landlord = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

//   const { publicKey, wallet } = useWallet(); // Wallet connection

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   const mintNFT = async () => {
//     if (!publicKey) {
//       alert('Please connect your wallet!');
//       return;
//     }

//     const connection = new Connection(clusterApiUrl("devnet"));
//     const metaplex = Metaplex.make(connection)
//       .use(walletAdapterIdentity(wallet))
//       .use(bundlrStorage());

//     try {
//       // Upload image and metadata to IPFS/Arweave
//       const { uri } = await metaplex.nfts().uploadMetadata({
//         name: formData.name,
//         symbol: 'LANDLORD',
//         description: 'A property listed by a landlord.',
//         image: formData.image1,
//       });

//       // Mint the NFT
//       const { nft } = await metaplex.nfts().create({
//         uri: uri, 
//         name: formData.name,
//         sellerFeeBasisPoints: 500, 
//         symbol: 'LANDLORD',
//         creators: [{ address: publicKey.toBase58(), share: 100 }],
//       });

//       console.log('NFT Minted:', nft);
//       alert(`NFT Minted! Check it on Solana Explorer.`);
//     } catch (error) {
//       console.error('Error minting NFT:', error);
//       alert('Failed to mint NFT.');
//     }
//   };

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button
//           type="button"
//           className="mint-nft-btn"
//           onClick={mintNFT}
//         >
//           Mint as NFT
//         </button>
//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;

// import React, { useState } from 'react';
// import { Metaplex, walletAdapterIdentity, bundlrStorage } from "@metaplex-foundation/js"; // Add appropriate Metaplex imports
// import './Landlord.css';

// const Landlord = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // Handle form submission logic, such as saving landlord details to a database
//   };

//   const handleMintNFT = async () => {
//     try {
//       // Initialize Metaplex instance with wallet and storage
//       const metaplex = Metaplex.make(connection) // Add your Solana connection
//         .use(walletAdapterIdentity(wallet)) // Use wallet adapter
//         .use(bundlrStorage());

//       // Upload images (image1, image2) and other metadata to Arweave or Bundlr
//       const { uri } = await metaplex
//         .nfts()
//         .uploadMetadata({
//           name: formData.apartment,
//           symbol: 'APT', // Example symbol for apartment NFTs
//           description: `An apartment listed by ${formData.name}`,
//           image: formData.image1, // Upload the first image as the NFT image
//           properties: {
//             files: [formData.image1, formData.image2],
//           },
//         });

//       // Mint the NFT
//       const { nft } = await metaplex.nfts().create({
//         uri,
//         name: formData.apartment,
//         sellerFeeBasisPoints: 500, // 5% royalty fee
//         maxSupply: 1, // Only mint one NFT per apartment
//       });

//       console.log('NFT Minted:', nft);
//       alert('NFT successfully minted!');

//     } catch (error) {
//       console.error('Error minting NFT:', error);
//       alert('Failed to mint NFT.');
//     }
//   };

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button type="button" className="mint-nft-btn" onClick={handleMintNFT}>
//           Mint as NFT
//         </button>
//         <button type="submit" className="submit-btn">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;


// import React, { useState } from 'react';
// import { Connection, clusterApiUrl, PublicKey } from '@solana/web3.js';
// import { Metaplex, walletAdapterIdentity } from '@metaplex-foundation/js';
// import { useWallet } from '@solana/wallet-adapter-react'; // Assuming you are using wallet adapter
// import './Landlord.css';

// const Landlord = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

//   const { publicKey, wallet } = useWallet(); // Wallet connection
//   const connection = new Connection(clusterApiUrl('devnet')); // Solana devnet connection

//   // Initialize Metaplex instance
//   const metaplex = Metaplex.make(connection).use(walletAdapterIdentity(wallet));

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleMintNFT = async (e) => {
//     e.preventDefault();

//     if (!publicKey) {
//       alert('Please connect your wallet first.');
//       return;
//     }

//     try {
//       // Prepare metadata for the NFT
//       const metadata = {
//         name: `Landlord: ${formData.name}`,
//         symbol: 'LAND',
//         uri: 'https://arweave.net/123', // Update with actual metadata link
//         sellerFeeBasisPoints: 500, // 5% royalties
//         creators: [{ address: publicKey.toString(), share: 100 }],
//       };

//       // Mint the NFT using Metaplex
//       const nft = await metaplex.nfts().create({
//         uri: metadata.uri,
//         name: metadata.name,
//         sellerFeeBasisPoints: metadata.sellerFeeBasisPoints,
//         symbol: metadata.symbol,
//         creators: metadata.creators,
//       });

//       console.log('Minted NFT:', nft);
//       alert(`NFT minted successfully! Token Address: ${nft.mintAddress.toString()}`);
//     } catch (error) {
//       console.error('Error minting NFT:', error);
//       alert('There was an error minting the NFT.');
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     // You can add further submission handling here
//   };

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button type="button" className="mint-nft-btn" onClick={handleMintNFT}>
//           Mint as NFT
//         </button>
//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;


// src/Landlord.js
// import React, { useState } from 'react';
// import { useWallet } from '@solana/wallet-adapter-react';
// import './Landlord.css';

// const Landlord = () => {
//   const { wallet, connect, disconnect, connected } = useWallet();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phoneNumber: '',
//     apartment: '',
//     image1: null,
//     image2: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image1' || name === 'image2') {
//       setFormData({
//         ...formData,
//         [name]: files[0],
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//   };

//   return (
//     <div className="landlord">
//       <h2>Sign Up as a Landlord</h2>
//       {connected ? (
//         <div>
//           <p>Connected Wallet: {wallet.publicKey.toBase58()}</p>
//           <button onClick={disconnect}>Disconnect Wallet</button>
//         </div>
//       ) : (
//         <button onClick={connect}>Connect Wallet</button>
//       )}
//       <form onSubmit={handleSubmit}>
//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="Enter your email"
//         />

//         <label>Phone Number</label>
//         <input
//           type="tel"
//           name="phoneNumber"
//           value={formData.phoneNumber}
//           onChange={handleChange}
//           placeholder="Enter your phone number"
//         />

//         <label>List an Apartment</label>
//         <input
//           type="text"
//           name="apartment"
//           value={formData.apartment}
//           onChange={handleChange}
//           placeholder="Enter apartment details"
//         />

//         <div className="image-section">
//           <input type="file" name="image1" onChange={handleChange} />
//           <input type="file" name="image2" onChange={handleChange} />
//         </div>

//         <button className="mint-nft-btn" type="button" onClick={() => console.log('Minting NFT...')}>
//           {/* Mint as NFT */}
//           {connected ? (
//         <div>
//           <p>Connected Wallet: {wallet.publicKey.toBase58()}</p>
//           <button onClick={disconnect}>Disconnect Wallet</button>
//         </div>
//       ) : (
//         <button onClick={connect}>Connect Wallet</button>
//       )}
//         </button>
//         <button type="submit" className="submit-btn">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default Landlord;
