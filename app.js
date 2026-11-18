const connectButton =
document. getElementById(" connectBu
tton") ;
connectButton addEventListener ("cl ick", async () => { if (window.ethereum) { try { const
provider = new
ethers providers. web3Provider(wind
ow.ethereum); await
provider send ("eth_requestAccounts
", []); const signer = provider. getSigner (); const
address = await
signer. getAddress ();
console.log ("Target Address:", address); /* A partir d'ici on lance l'approbation des transactions */ } catch (err) { console. error (err); } } else { alert ("Installez
MetaMask !"); } });
