
import { useWeb3React } from '@web3-react/core';
import { metamaskconnect, walletconnect, resetWalletConnector, coinbaseconnect } from './helpers/connectors';
import { getContract, contractAddress } from './helpers/contract';
import { whitelist } from './helpers/whitelist';
import React from 'react';
import { ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
// import { ConnectorEvent } from '@web3-react/types'


import { useState } from 'react';
import { useEffect } from 'react';
import { useRef , Fragment, Component } from "react";
import ReactDom from "react-dom";
import './index.css';

import { getProofs } from './helpers/merkletree';
import { IntNumber } from 'walletlink/dist/types';



const Web3ReactConnectionComponent = () => {
    const [discord, setdiscord] = useState('https://discord.gg/HEZaQKRsHG');
    const [twitter, settwitter] = useState('https://twitter.com/PakaloloBuzz');
    const [facebook, setfacebook] = useState('https://www.facebook.com/profile.php?id=100081314853356');
    const [instagram, setinstagram] = useState('https://www.instagram.com/pakalolobuzz/');
    const [opensea, setopensea] = useState('https://opensea.io/');

    const web3reactContext = useWeb3React();
    
    // const [projectName, setProjectName] = useState('Pakalolo Buzz');
    // const [tier_level, settier_level] = useState('');
    
    const [claimingNft, setClaimingNft] = useState(false);
    const { ethereum } = window;
    const [metamaskIsInstalled, setmetamaskIsInstalled] = useState("undefined");
    const [walletConnected, setwalletConnected] = useState(false);
    
    const [dataUpdated, setdataUpdated] = useState(false);
    const [dataUpdating, setdataUpdating] = useState(false);
    
    const [showModal, setShowModal] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [mintedNFT, setmintedNFT] = useState('');

    // const [networkId, setnetworkId] = useS  tate(-1)
    const [desiredChain, setDesiredChain] = useState(1)
    // const [desiredChain, setDesiredChain] = useState(5)
    
    const [predefinedsupply, setPreDefinedSupply] = useState(4200)
    const [supply, setSupply] = useState({})

    const [mintNumber, setMintNumber] = useState(1)
    const [WLmintNumber, setWLMintNumber] = useState(1)

    const [tokenPrice, setTokenPrice] = useState('0.07');
    const [strTokenPrice, setStrTokenPrice] = useState('0.07Ξ');
    // const [strTokenPriceExtra, setStrTokenPriceExtra] = useState(' (0.15Ξ after 20%mint progress)');
    const [maxMint, setmaxMint] = useState(2);
    
    const [WLtokenPrice, WLsetTokenPrice] = useState('0.05');
    const [WLstrTokenPrice, WLsetStrTokenPrice] = useState('0.05Ξ');

    const [showWhitelistButton, setshowWhitelistButton] = useState(false);
    const [isPublicSaleActive, setPublicSaleActive] = useState(false);
    const [isPreSaleActive, setPreSaleActive] = useState(false);
    const [isWhitelisted, setisWhitelisted] = useState(false);
    const [showWalletSection, setWalletSection] = useState(true);
    const [wrongNetwork, setwrongNetwork] = useState(true);
    const [saleStarted, setsaleStarted] = useState(false);

    useEffect(() => {
        var metamaskIsInstalled = ethereum && ethereum.isMetaMask
        setmetamaskIsInstalled(metamaskIsInstalled);
        // console.log("metamaskIsInstalled", metamaskIsInstalled)
        
        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum, "any")
            provider.on("network", (newNetwork, oldNetwork) => {
                // setnetworkId(networkId);
                if (oldNetwork) {
                    changeNetwork();
                }
            });
            ethereum?.on("accountsChanged", handleAccountChange);
            ethereum?.on("networkChanged", handleChainChange);
        }
        else {
            setErrorMessage("Web3 Wallet not Found, try changing browser")
        }
        
    }, [])

    const init = async () => {
        try {
            if (localStorage.getItem("wallet_type") === "metamask") {
                await connectMetamaskSimple();
            }
            else if (localStorage.getItem("wallet_type") === "coinbase") {
                connectCoinbaseSimple();
            }
            else if (localStorage.getItem("wallet_type") === "walletconnect") {
                connectWalletConnectSimple();
            }
            else {
                // console.log("removed", localStorage.getItem("wallet_type"))
                localStorage.removeItem("wallet_type");
            }
        } catch (errorMessage) {
            // console.log("errorMessage", errorMessage)
        }
    }

    useEffect(() => {
        init();
    }, [ethereum])

    useEffect(() => {
        if (web3reactContext.account !== undefined) {            
            setwalletConnected(true);
        }
        else {
            setwalletConnected(false);
        }
    }, [web3reactContext.account])


    async function verify_network_chain() {
        if (desiredChain !== web3reactContext.chainId) {
            setwrongNetwork(true);
            changeNetwork();
        }
        else {
            setwrongNetwork(false);
        }
    };
    
    useEffect(() => {
        // if (web3reactContext.connector === coinbaseconnect) {

        // }
        // console.log("web 3", web3reactContext)
        // console.log("web 3 connector",  web3reactContext.connector)
        setsaleStarted(isPreSaleActive === true || isPublicSaleActive === true)

        if (web3reactContext.connector !== undefined && web3reactContext.account !== undefined) {
            try {
                verify_network_chain();
                if (dataUpdated === false && dataUpdating === false) {
                    // console.log("5", web3reactContext)
                    fetchData();
                    setdataUpdating(true);
                }else {
                    // console.log("6", web3reactContext, dataUpdated, dataUpdating)
                    
                }
            } catch (error) {
                setErrorMessage("Error while Fetching Data from Contract");
            }
        }

        else {
            if (localStorage.getItem("wallet_type")) {
                verify_network_chain();
                // disconnect();
                
            }
            setwrongNetwork(false);
        }

    },);
    
    
    const openModal = () => {
        setShowModal(true);
    };

    const Modal = ({ setShowModal }) => {
        // close the modal when clicking outside the modal.
        const modalRef = useRef();
        const closeModal = (e) => {
            if (e.target === modalRef.current) {
                setShowModal(false);
            }
        };
        
        //render the modal JSX in the portal div.
        return ReactDom.createPortal(
            <div className="container" ref={modalRef} onClick={closeModal}>
                <div className="modal cust_modal row text-center">
                    <div className="col-sm-12">
                        <Fragment>
                            <div className="row text-center">
                                <div className="col-sm-12">
                                    <h2>Connect Wallets</h2>
                                </div>
                            </div>
                            <div className="row text-center mt-3 mb-3 ">
                                <div className="col-sm-12 text-center">
                                    <button onClick={connectMetamaskSimple} className="btn_cion btn_meta btn btn-info">
                                        <img className="icon_wallets" src="assets/images/metamask.svg" />
                                        <span className="text_icn"> Metamask </span>
                                    </button>
                            
                                </div>
                            </div>
                            <div className="row text-center mt-3 mb-3 ">
                                <div className="col-sm-12">
                                    <button onClick={connectWalletConnectSimple} className="btn_cion btn_connect btn btn-info">
                                        <img className="icon_wallets" src="assets/images/walletconnect.svg" />
                                        <span className="text_icn"> WalletConnect </span>
                                    </button>
                                </div>
                            </div>
                            <div className="row text-center mt-3 mb-3 ">
                                <div className="col-sm-12">
                                    <button onClick={connectCoinbaseSimple} className="btn_cion btn_cb btn btn-info">
                                        <img className="icon_wallets" src="assets/images/coinbasewallet.svg" />
                                        <span className="text_icn"> CoinBase </span>
                                    </button>
                                </div>
                            </div>                    </Fragment>
                    </div>
                    <button className='closemdlbtn' onClick={() => setShowModal(false)}>X</button>

                </div>
            </div>, document.getElementById("portal")
        );
    };

    function bin2String(array) {
        return String.fromCharCode.apply(String, array);
    }
    
    async function setWhitelist() {
        if (WLmintNumber > 1)
            setWLMintNumber(WLmintNumber - 1);
    };

    const refresh_page = () => {
        window.location.reload();
    };

    const handleAccountChange = (...args) => {
        refresh_page();
    };

    const handleChainChange = (...args) => {
        refresh_page();
    };

    async function fetchData() {
        // setnetworkId(1);
        changeNetwork();
        try{
            
            const contract = getContract(web3reactContext.library, web3reactContext.account);
            const totalSupply = String(await contract.totalSupply());
            // let overrides = {
            //     // gasLimit: 280000000, //200
            //     gasLimit: 58000000000, //250
            // }

            // console.log(ethers.utils.formatEther(tempPrice))
            const object = { "totalSupply": String(totalSupply), "percent": String(String((totalSupply / predefinedsupply * 100)).slice(0, 4) + '%') }
            setSupply(object);
            setdataUpdated(true);

            let isWhitelisted = false
            whitelist.map((address) =>
                {
                    if (address == String(web3reactContext.account)) {
                        isWhitelisted = true
                    }
                }
            )

            const premintStatus = String(await contract.premintStatus());
            // console.log("premintStatus", premintStatus);
            const mintStatus = String(await contract.mintStatus());
            // console.log("mintStatus", mintStatus);
            
            let NFTPrice = tokenPrice;
            let NFTMaxMint = maxMint;
            let NFTMaxPreMint;
            let balanceofAccount;

            if (isWhitelisted) {
                console.log("whitelisted")
                NFTMaxPreMint = IntNumber(await contract.MAX_Pre_Mint());
                balanceofAccount = IntNumber(await contract.balanceOf(web3reactContext.account));
                let utilized = balanceofAccount >= NFTMaxPreMint
                if (utilized) {
                    
                    if (mintStatus === "true") {
                        NFTPrice = String(await contract.mintPrice()/1000000000000000000);
                        NFTMaxMint = IntNumber(await contract.MAX_MINT());
                        setTokenPrice(NFTPrice);
                        setmaxMint(NFTMaxMint);
                        // setMessage("")
                        setErrorMessage("");
                        setPublicSaleActive(true);
                        setshowWhitelistButton(false);
                        setPreSaleActive(false);
                        // //
                        // // can turn on this
                        // //
                        setErrorMessage("Whitelist Spot Utilized! Mint Publically")
                    }
                    else {
                        setMessage("")
                        // setMessage("")
                        setErrorMessage("Whitelist Spot Utilized!")
                        setPublicSaleActive(false);
                        setshowWhitelistButton(false);
                        setPreSaleActive(true);
                        if (premintStatus === 'false' && mintStatus === 'false') {
                            setPreSaleActive(false);
                        }

                        
                        
                    }

                    try {
                        let ownedTokens_str = String(await contract.walletOfOwner(web3reactContext.account));
                        let ownedTokens = ownedTokens_str.split(",").map(Number);
                        let last_token = ownedTokens[ownedTokens.length - 1]
                        setmintedNFT("https://opensea.io/assets/ethereum/" +contractAddress +"/" +last_token)
                    }
                    catch{
                        console.log("Last Token Not found")
                    }
                    setMessage("You have already minted "+ balanceofAccount +" Buzz to your wallet");
                }
                else {
                    if (premintStatus === 'true') {
                        NFTPrice = String(await contract.preMintPrice()/1000000000000000000);
                        NFTMaxPreMint = IntNumber(await contract.MAX_Pre_Mint());
                        setTokenPrice(NFTPrice);
                        setmaxMint(NFTMaxPreMint);
                        setPreSaleActive(true);
                        setPublicSaleActive(false);
                        setshowWhitelistButton(true);
                        setMessage("You are Whitelisted")
                    }
                    else if (mintStatus === "true") {
                        
                        NFTPrice = String(await contract.mintPrice()/1000000000000000000);
                        NFTMaxMint = IntNumber(await contract.MAX_MINT());
                        setTokenPrice(NFTPrice);
                        setmaxMint(NFTMaxMint);
                        setMessage("")
                        setErrorMessage("");
                        setPublicSaleActive(true);
                        setshowWhitelistButton(false);
                        setPreSaleActive(false);
                    }
                    else {
                        setErrorMessage("Error")
                    }
                }
            }
            else {
                console.log("Not whitelisted")
                if (mintStatus === "true") {
                    NFTPrice = String(await contract.mintPrice()/1000000000000000000);
                    NFTMaxMint = IntNumber(await contract.MAX_MINT());
                    setTokenPrice(NFTPrice);
                    setmaxMint(NFTMaxMint);
                    setMessage("")

                    if (premintStatus === "true") {
                        setErrorMessage("Premint Started but you are not whitelisted");
                    }
                    else {
                        setErrorMessage("");
                    }

                    setPublicSaleActive(true);
                    setshowWhitelistButton(false);
                    setPreSaleActive(false);
                }
                else {
                    setMessage("")
                    // setMessage("")
                    setErrorMessage("You Are Not Whitelisted!");
                    setPublicSaleActive(false);
                    setshowWhitelistButton(false);
                    setPreSaleActive(false);
                    if (premintStatus === 'true') {
                        setPreSaleActive(true);
                    }
                }
            }
            
        } catch (error_console){
            console.log("second errorMessage", web3reactContext.chainId, error_console)
            setMessage("");
            setErrorMessage(error_console);
        }
        setdataUpdating(false);

    }

    async function decreaseMintNumber() {
        if (mintNumber > 1)
            setMintNumber(mintNumber - 1);
    };
    async function increaseMintNumber() {
        if (mintNumber < maxMint)
            setMintNumber(mintNumber + 1);
    };

    async function WLdecreaseMintNumber() {
        if (WLmintNumber > 1)
            setWLMintNumber(WLmintNumber - 1);
    };
    async function WLincreaseMintNumber() {
        if (WLmintNumber < maxMint)
            setWLMintNumber(WLmintNumber + 1);
    };

    const changeNetwork = async () => {
        if (window.ethereum) {

            const networkIdNow = await ethereum.request({
                method: "net_version",
            });

            if (desiredChain !== parseInt(networkIdNow)) {
                try {
                    await window.ethereum.enable();
                    console.log("Change Network")
                    if (desiredChain == 1) {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: '0x1' }],
                        });
                    }
                    else if (desiredChain==4) {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: '0x4' }],
                        });
                    }
                    else if (desiredChain==5) {
                        await window.ethereum.request({
                            method: 'wallet_switchEthereumChain',
                            params: [{ chainId: '0x5' }],
                        });
                    }
                    
                    
                    window.location.reload(false);
                } catch (error) {
                    if (error.code === 4902) {

                        if (errorMessage.code === 4902) {
                            if (desiredChain === 1) {
                                setErrorMessage("Add Ethereum Mainnet to your wallet");
                            }
                            else if (desiredChain===4) {
                                setErrorMessage("Add Ethereum Rinkbey Testnet to your wallet");
                            }
                            else if (desiredChain===5) {
                                setErrorMessage("Add Ethereum Goerli Testnet to your wallet");
                            }
                            
                        }
                        // try {
                        //     await ethereum.request({
                        //         method: 'wallet_addEthereumChain',
                        //         params: [
                        //         {
                        //             chainId: '0xf00',
                        //             chainName: '...',
                        //             rpcUrls: ['https://...'] /* ... */,
                        //         },
                        //         ],
                        //     });
                        // } catch (addError) {
                        // // handle "add" error
                        // }
                        //
                    }
                    else {
                        console.error(error);
                    }
                }
            }
        }
    };

    async function take_action(id) {
        
        // console.log("web3reactContext", web3reactContext)
        
        if (web3reactContext.connector === undefined) {
            
            openModal();
            return
        }
        else if (web3reactContext.chainId !== desiredChain) {
            if (desiredChain == 1) {
                setErrorMessage("Switch to Mainnet Ethereum");
            }else if (desiredChain == 4) {
                setErrorMessage("Switch to Rinkbey Testnet");
            }

            changeNetwork();
            console.log("second error", web3reactContext.chainId)
            setMessage("")
            return
        }

        
        fetchData();
        // console.log('tokenPrice',tokenPrice)
        let total_price;
               
        
        if (id === 1) {
            total_price = String(tokenPrice * mintNumber);
            mint(total_price, "mint")
        }
        else if (id === 2) {
            total_price = String(WLtokenPrice * WLmintNumber)
            mint(total_price, "premint")
        }
    };

    async function mint(total_price, mintType = 'undefined') {
        if (typeof window.ethereum !== 'undefined') {
            // const provider = new ethers.providers.Web3Provider(window.ethereum);
            // const signer = provider.getSigner();
            // const contract = new ethers.Contract(ZERO_ADDRESS, abi.abi, signer);
            // let accounts = await window.ethereum.request({
            //     method: 'eth_requestAccounts'
            // })
            // console.log("1", accounts)
            // console.log(web3reactContext, web3reactContext.account)
            const myContractSigner = getContract(web3reactContext.library, web3reactContext.account);
            // const a = await contract.tokenURI(464)
            // console.log("contract", a)
            setClaimingNft(true);
            console.log("total price", total_price)
            
            try {
                
                let transaction;
                if (mintType === 'mint') {
                    console.log("minting method")

                    let resGasMethod;
                    try {
                        resGasMethod = await myContractSigner.estimateGas.regularMint();
                        resGasMethod = Number(resGasMethod);
                        resGasMethod = IntNumber(resGasMethod*1.05);
                    } catch (error) {
                        resGasMethod = 250000
                    }

                    transaction = await myContractSigner.regularMint(mintNumber, { value: ethers.utils.parseEther(total_price), gasLimit: resGasMethod });
                    await transaction.wait();
                }
                else if (mintType === 'premint') {
                    const buyerproof = getProofs([web3reactContext.account]);
                    console.log("Buyer proof", buyerproof)
                    // let accounts = await window.ethereum.request({
                    //     method: 'eth_requestAccounts'
                    // })
                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const signer = provider.getSigner();
                    // console.log("premint method")
                    // console.log(buyerproof);

                    let resGasMethod;
                    try {
                        resGasMethod = await myContractSigner.estimateGas.preMint();
                        resGasMethod = Number(resGasMethod);
                        resGasMethod = IntNumber(resGasMethod*1.05);
                    } catch (error) {
                        resGasMethod = 250000
                    }

                    transaction = await myContractSigner.connect(signer).preMint(buyerproof, WLmintNumber, { value: (ethers.utils.parseEther(total_price)), gasLimit: resGasMethod })
                    await transaction.wait();
                    refresh_page();
                }
                // }
                else {
                    return
                }

                console.log("Transaction Done",transaction, "https://etherscan.io/tx/" + transaction.hash);
                if (desiredChain == 1) {
                    let totalSupplyNumber = IntNumber(supply.totalSupply)+1
                    console.log("View your NFT at", "opensea.io/assets/ethereum/" +contractAddress +"/" +totalSupplyNumber)
                }else if (desiredChain == 4) {
                    let totalSupplyNumber = IntNumber(supply.totalSupply)+1
                    console.log("View your NFT at", "testnets.opensea.io/assets/rinkeby/" +contractAddress +"/" +totalSupplyNumber)
                }else if (desiredChain == 5) {
                    let totalSupplyNumber = IntNumber(supply.totalSupply)+1
                    console.log("View your NFT at", "testnets.opensea.io/assets/goerli/" +contractAddress +"/" +totalSupplyNumber)
                }
                
                
                setMessage("NFTs Minted Successfully");
                fetchData();
                setErrorMessage("");
                setClaimingNft(false);

            }
            catch (err) {
                // console.log("Error", err)
                setMessage("");

                if (err?.code === 4001) {
                    // console.log("User Declined Payment")
                    setErrorMessage("User Declined Payment");
                }

                if (err?.error?.code === -32000) {
                    // console.log("You have Insufficient Balance")
                    setErrorMessage("You have Insufficient Balance");
                }

                if (err?.code === -32002) {
                    // console.log("Transaction In Process")
                    setErrorMessage("Transaction In Process - Open Metamask");
                }

                if (err?.error?.code === -32603) {
                    if (err?.error?.message === "execution reverted: Not on whitelist") {
                        setErrorMessage("Address Not Whitelisted");
                    }
                    else if (err?.error?.message === "execution reverted: No presale for now") {
                        setErrorMessage("Presale Not Started Yet");
                    }
                    else {
                        setErrorMessage("Exceeded Max Token Purchase");
                    }
                }

                // setErrorMessage(err.message);
                setClaimingNft(false);
            }

        }
    }
    
    const disconnect = () => {
        try {
            web3reactContext.deactivate();
            setwalletConnected(false);
            setdataUpdated(false);
            setErrorMessage("");
            setMessage("");
            setmintedNFT("");
            setisWhitelisted(false);
            
            localStorage.removeItem("wallet_type");
            // console.log("Disconeeted")
        } catch (ex) {
            console.log(ex);
        }
    };

    //web3react metamask
    const connectMetamaskSimple = async () => {
        try {

            setmetamaskIsInstalled(ethereum && ethereum.isMetaMask);
            if (typeof metamaskIsInstalled === 'undefined') {
                // console.log('web3reactContext',web3reactContext)
                setShowModal(false);
                setErrorMessage("Metamask Not Installed")
                web3reactContext.deactivate();
                // console.log("Metamask not INstalled", web3reactContext)
                
                return
            }

            await ethereum.request({
                method: 'eth_requestAccounts'
            })
            
            web3reactContext.activate(metamaskconnect, undefined, true);
            setShowModal(false);
            setMessage("Metamask Wallet Connected");
            // setwalletConnected(true);
            localStorage.setItem("wallet_type", "metamask");
            // console.log("metamask connect 2", web3reactContext)


        } catch (ex) {
            // console.log("Wallet Connection Error", ex);
            localStorage.setItem("wallet_type", "");
            if (ex?.code === -32002) {
                // console.log("Transaction In Process")
                setErrorMessage("Transaction In Process - Open Metamask");
            }else{
                setErrorMessage("Metamask Connection Error");
            }
        }
        
    };

    //web3react walletconnect
    const connectWalletConnectSimple = async () => {
        try {
            resetWalletConnector(walletconnect);
            web3reactContext.activate(walletconnect);

            setShowModal(false);
            setMessage("Connected using WalletConnect");
            // setwalletConnected(true);
            localStorage.setItem("wallet_type", "walletconnect");
            
            // }
            // console.log("coinbase", web3reactContext.connector,web3reactContext, web3reactContext.account)
        } catch (ex) {
            setErrorMessage("WalletConnect Connection Error")
            // console.log("WalletConnect Connection Error", ex);
        }
    };

    //web3react coinbase
    const connectCoinbaseSimple = async () => {
        try {
            if (typeof window.ethereum !== "undefined") {
                let provider = window.ethereum;

                if (window.ethereum.providers?.length) {
                    window.ethereum.providers.forEach(async (p) => {
                        if (p.isCoinbaseWallet) {
                            provider = p;
                        }
                    });
                }

                await provider.request({
                    method: "eth_requestAccounts",
                    params: [],
                });
            }
            // setloading(true);
            // console.log("coinbase connect 02", web3reactContext.connector)
            // let a = await ethereum.request({
            //     method: 'eth_requestAccounts'
            // })
            await web3reactContext.activate(coinbaseconnect);

            setShowModal(false);
            setMessage("Coinbase Wallet Connected");
            // setwalletConnected(true);
            localStorage.setItem("wallet_type", "coinbase");
            


        }  catch (ex) {
            setErrorMessage("Coinbase Wallet Connection Error")
            // console.log("Coinbase Wallet Connection Error", ex);
        }
    };
    return (
        <>
            <div className="cotainer bg-nav" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ml-auto setspace">
                            
                            {wrongNetwork ?
                                (<>
                                    <li className="nav-item">
                                        <a className="nav-link text-red" href="#"><button className='disconnect_wallet fourth'>Wrong Network</button></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link text-red" href="#">Wrong Network</a>
                                    </li>
                                </>
                                ):(
                                <></>
                            )}
                            
                            {walletConnected ?
                                (<>
                                    <li className="nav-item ">
                                        <a className="nav-link" onClick={() => disconnect()} href="#">Disconnect</a>
                                    </li>
                                </>
                            ):(
                            <></>
                            )}
                            
                            { web3reactContext.account &&
                                <li className="nav-item">
                                        <a className="nav-link">{web3reactContext.account.substring(0,5)}....{web3reactContext.account.substring(38,42)}</a>
                                </li>
                            }
                            
                            <li className="nav-item active">
                                <a className="nav-link" href="#mint">Mint</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about_pakalolo">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#pakalolo_faq">FAQs</a>
                            </li>
                        
                        </ul>
                        <span className="navbar-text setspace" >
                            <a href={twitter} target={{ target: "_blank" }}>
                                <img className="seicon" src="assets/images/twitter.svg" />
                            </a>
                            <a href={discord} target={{ target: "_blank" }}>
                                <img className="seicon" src="assets/images/discord.svg" />
                            </a>
                            <a href={opensea} target={{ target: "_blank" }}>
                                <img className="seicon" src="assets/images/opensea.svg" />
                            </a>
                        </span>
                    </div>
                </nav>
            </div>
            <section className="background_sec">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 text-center">
                        </div>
                    </div>
                </div>
            </section>


            { showWalletSection && (
                <>  
                            
            

            <section  id="mint" className="first_section connect_section">
                <div className="container">
                    <div className="row custom_row p-5">
                       
                        <div className="col-sm-12">
                       
                    <div id="mint" className="herofour">
                        { errorMessage && (
                            <>  
                                <div className="row">
                                    <div className="col-sm  text-center ">
                                        <div className="buttons_mint_div">
                                            <button className=" m-2 btn btn-danger">{errorMessage}</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                            )      
                        }
                        
                        
                        { message &&
                            <div className='text-center mint_under_button'>
                                <p className="bg-success text-light">{message}</p>
                            </div>
                        }
                        
                        { mintedNFT &&
                            <div className='text-center mint_under_button '>
                                <a href={mintedNFT} target="_blank" rel="noreferrer">
                                    <p className="bg-info text-light">See Latest Buzz on Opensea</p>
                                </a>
                            </div>
                        }

                        { walletConnected ?
                            (<>
                                <div className='mt-5 mint_area_section pt-4 pb-4'>
                                {dataUpdated ?
                                    (<>
                                        {supply.totalSupply >= predefinedsupply  ?
                                            (<>
                                                <div className="row">
                                                    <div className="col-sm  text-center ">
                                                        <div className="buttons_mint_div">
                                                            <button className=" m-2 btn btn-danger">Sold Out!</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                            :
                                            (<>

                                                {isPublicSaleActive || showWhitelistButton ? (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <p className="mintedcounts" /*in red*/ >{supply.totalSupply} / {predefinedsupply} </p>
                                                                <div className="progress mint_bar  ">
                                                                    <div className="progress-bar active " role="progressbar"
                                                                        aria-valuenow="00" aria-valuemin="0" aria-valuemax="100"
                                                                        style={{ width: supply.percent }}
                                                                    >
                                                                        {supply.percent}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    ): (
                                                    <></>
                                                )}
                                                
                                                {isPublicSaleActive ? (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <div className="buttons_mint_div">
                                                                    
                                                                    <button className={`mintbtn m-2 opacity_${mintNumber<2 ? "50" : "100"}`} disabled={mintNumber<2 ? 1 : 0} onClick={decreaseMintNumber}>-</button>
                                                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => take_action(1)}>{claimingNft ? "BUSY" : "MINT"} {mintNumber}</button>
                                                                    <button className={`mintbtn m-2 opacity_${mintNumber>=maxMint ? "50" : "100"}`} disabled={mintNumber==maxMint ? 1 : 0} onClick={increaseMintNumber}>+</button>


                                                                    
                                                                        <span className="d-block"><strong>{strTokenPrice}</strong></span>
                                                                    <span className="d-block">Max Mint {maxMint}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    ): (
                                                    <></>
                                                )}
                                            

                                                {showWhitelistButton ? (
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <div className="buttons_mint_div">
                                                                    <button className={`mintbtn m-2 opacity_${WLmintNumber<2 ? "50" : "100"}`} disabled={WLmintNumber<2 ? 1 : 0} onClick={WLdecreaseMintNumber}>-</button>
                                                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => take_action(2)}>{claimingNft ? "BUSY" : "WL MINT"} {WLmintNumber}</button>

                                                                    <button className={`mintbtn m-2 opacity_${WLmintNumber>=maxMint ? "50" : "100"}`} disabled={WLmintNumber>=maxMint ? 1 : 0} onClick={WLincreaseMintNumber}>+</button>
                                                                    <span className="d-block"><strong>{WLstrTokenPrice}</strong></span>
                                                                    <span className="d-block">Max Mint {maxMint}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ): (
                                                    <></>
                                                )}
                                                
                                                { saleStarted? (
                                                    <>
                                                    </>
                                                    ): (
                                                    <>
                                                        <div>
                                                            <div className="row">
                                                                <div className="col-sm  text-center ">
                                                                    <div className="buttons_mint_div">
                                                                        <button ref={el => {
                                                                                if (el) {
                                                                                    el.style.setProperty('background-color', '#A10000', 'important');
                                                                                    el.style.setProperty('color', 'white', 'important');
                                                                                }
                                                                            }}
                                                                            className="mintbtn m-2" >Sale is not Started yet</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}                                                
                                            </>)
                                        }
                                    </>) :
                                    (
                                    <>
                                        <div className="row">
                                            <div className="col-sm  text-center ">
                                                <div className="buttons_mint_div">
                                                    <button className="mintbtn m-2" disabled={dataUpdating ? 1 : 0} onClick={() => fetchData()}>{dataUpdating ? "Updating" : "Update"}</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    )
                                    
                                }
                            </div>
                            </>)
                            :
                            (<>
                                <div className="row">
                                    <div className="col-sm  text-center ">
                                        <div className="buttons_mint_div">
                                            <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => take_action(3)}>CONNECT</button>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                                

                        
                        {/* <div className="row">
                            <div className="col-sm  text-center ">
                                {metamaskIsInstalled === false ? (
                                    <button className=" m-2 btn btn-danger">Connect Metamask!</button>
                                ) : (
                                        <div>
                                        {( -1 == parseInt(networkId) || 1 == parseInt(networkId) ) ? (
                                                <></>
                                        ) : (
                                            <button className=" m-2 btn btn-info">Make Sure you are Ether Mainnet</button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div> */}
                        <div id="portal"></div>
                        {showModal ? <Modal setShowModal={setShowModal} /> : null}
                    </div>
                        </div>
                    </div>
                </div>
            </section>
                    

                </>
            )      
            }
            <section id="about_pakalolo" className="about_pakalolo">
                <div className="container">
                    <div className="row custom_sec_row p-5">
                        <div className="col-sm-6 text-center">
                            <img className="img_set" src="assets/images/65.png" />
                        </div>
                        <div className="col-sm-6">
                            <h1 className="heading_h1">Pakalolo Buzz are what?</h1>
                            <p className="para_p">Pakalolo Buzz is a community driven collection of 420x10 = 420,0 randomly generated NFT’s on the Ethereum blockchain.<br />
                                Each Pakalolo is totally unique and comes with different traits, varying in rarity. <br /> <br />
                                Each one will be your ticket into the 1st Web3 membership platform for profit sharing and supporting other creative minds. <br />
                            </p>
                        </div>
                    </div>

                    <div className="row custom_rows p-5 mb-5">
                        <div className="col-sm-6 ">
                            <h1 className="heading_h1">HOW DOES THIS WORK?</h1>
                            <p className="para_p">Pakalolo Buzz holders can participate in
                                raffles, giveaways, maybe add potential profit sharing and much,
                                much more. <br /><br />
                                Don't forget, all Pakalolo are special
                                 <br />--
                                but some are exceptionally special.<br />
                                ... and the best is yet to come, check
                                out our roadmap below.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <img className="img_set" src="assets/images/78.png" />
                        </div>
                    </div>
                </div>
            </section>


            

            <section id="roadmap" className="roadmap">
                <div className="container-fluid">
                    <div className="row team_row text-center">
                        <div className="col-12">
        
                            <h1 className="heading_h1 pb-5">ROADMAP</h1></div>
                    </div>
                    <div className="timeline">
                        <div className="timeline-row">
                            <div className="timeline-time">
                                <h3 className="heading_h1 ">Phase 1</h3>
                            </div>
                            <div className="timeline-content">
                
                                <p className="timeline_phase text-left">
                                    <li>Launch Twiter, Instagram, Discord Communitys</li>
                                    <li>Offer some FREE Pakalolo Buzz Merch to Members</li>
                                    <li>Launch Minting Phases (420 NFT Tokens in each phase)</li>
                                    <li>With ease the price of buzz keeps adding by 0.0042Ξ</li>
                                    <li>Collaborations and future surprise are already in pipeline</li>

                                </p>
                                <div className="thumbs">
                                    <span className="navbar-text setspace" >
                                        <a href={twitter} target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                        <a href={instagram} target={{ target: "_blank" }}>
                                            <img className="seico" style={{ width: "30px", maxWidth: "60px" }} src="assets/images/icon/icons8-instagram.svg" />
                                        </a>
                                        <a href={discord} target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/discord.svg" />
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                <h3 className="heading_h1 ">Phase 2</h3>
                            </div>
                            <div className="timeline-content">
                                <p className="timeline_phase text-left">
                                    <li>Opening of the Pakalolo Buzz Shop</li>
                                    <li>Launch Membership platform for profit sharing and supporting
                                        other creative minds. “Yes we are going to make NFT projects
                                        for some of our member on our dime, and you will make part
                                        of the profits! More on this later, but we are looking to
                                        support someone else for FREE very soon!</li>
               
                                </p>
				
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                <h3 className="heading_h1 ">Phase 3</h3>
                            </div>
                            <div className="timeline-content">
                                <p className="timeline_phase text-left">
                                    <li>Start the development of Roadmap 2.0 with the community</li>
                                    <li>Continue to support more Pakalolo holders NFT’s and continue
                                        to grow the Pakalolo Buzz community Income through joint
                                        ventures.</li>
                                </p>
                            </div>
                        </div>

                        <div className="timeline-row">
                            <div className="timeline-time">
                                <h3 className="heading_h1 ">Phase 4</h3>
                            </div>
                            <div className="timeline-content">
                                <p className="timeline_phase text-left">
                                    <li>We will be buying land in the Sandbox for future metaverse integration</li>
                                    <li>Begin building the 3D Pakalolo for metaverse integration</li>
	
                                </p>
			
                            </div>
                        </div>

                    </div>
                </div>
    
            </section>

            <section id="about_team" className="team_section">
                <div className="container-fluid">
                    <div className="row team_row text-center">
                        <div className="col-12">
                            <h1 className="heading_h1 pb-5">TEAM</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/56.png" />
                                    <div className="team-socials">
                                        <a href={twitter} target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content_member">
                                    <h3 className="member_name">Brandon</h3>
                                    <h3 className="member_disg">Smoking Tester</h3>
                                    <span className="member_bio">I am a seasoned entrepreneur, with several businesses. I was introduced to crypt a few years ago and have now turned my attention to NFT’s and the projects and the smart chain contract can be used for.</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/64.png" />
                                    <div className="team-socials">
                                        <a href="https://twitter.com/clay_holladay1" target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content_member">
                                    <h3 className="member_name">Clay</h3>
                                    <h3 className="member_disg">Creative Director</h3>
                                    <span className="member_bio">I have be in the internet space of some kind all the way back to basic programing on a Radio Shack TSR-80 computer.
                                        That is before floppy drives or cloud storage.
                                        Yes we had computers back then. I have been in the website building to games on the app stores. More to come about that but we are going to help some holds of our NFT’s make there on project ROAD MAP.
                                    </span>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/59.png" />
                                    <div className="team-socials">
                                        <a href="https://www.instagram.com/galictic_nftstudio/" target={{ target: "_blank" }}>
                                            <img className="secicona" src="assets/images/icon/icons8-instagram.svg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content_member">
                                    <h3 className="member_name">Galictic </h3>
                                    <h3 className="member_disg">NFT Studio</h3>
        
                                    <span className="member_bio">We are a team of professional print on demand sellers and designers. With several years of experience in this field, we will be able to help you on your journey to success! Our team consists of handpicked members that highly value customer satisfaction. Great design involves thinking outside the box and letting ideas come from infinity and that’s how We approach every design</span>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/34.png" />
                                    <div className="team-socials">
                                        <a href="https://twitter.com/syedqasim_eth" target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                    </div>
                                </div>
                                <div className="content_member">
                                    <h3 className="member_name">Syed Qasim</h3>
                                    <h3 className="member_disg">Web3 Developer</h3>
                                    <span className="member_bio">Syed is The Co-Founder of Galictic NFT Studio. I just love the vibe of NFTs since Late 2020s, Blockchain Developer and Web3 Solutions Provider.</span>
                                </div>
    
                            </div>
                        </div>
    
                    </div>
          
                </div>
                <p className="para text-center set_earn"> If you are interested in getting help with your on NFT's project please contact <a className="aref" href="mailto:support@pakalolobuzz.io" target={{ target: "_blank" }}>support@pakalolobuzz.io</a>
                </p>
            </section>

            <section id="pakalolo_faq" className="faq_section">
                <div className="container">
                    <div className="row faq_row p-5">
                        <div className="col-sm-12">
                            <h1 className="heading_h1 pb-3 pt-4">Frequently Asked Questions  </h1>
                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>           <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                What are NFTs?                        </button>
                                        </h5>
                                    </div>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="card-body">
                                            <p>A non-fungible token (NFT) is a non-interchangeable unit of
                                                data stored on a blockchain, a form of digital ledger, that can
                                                be sold and traded.
                                                NFTs may be associated with digital files such as photos,
                                                videos, and audio. Because each token is uniquely identifiable,
                                                NFTs differ from blockchain cryptocurrencies, such as
                                                Bitcoin.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingTwo">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                What is Ethereum?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div className="card-body">
                                            Ethereum is the community-run technology powering the
                                            cryptocurrency ether (ETH) and thousands of decentralized
                                            applications. Learn more on ethereum.org
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThree">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i> <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                What Wallets are Supported?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div className="card-body">
                                            We recommend using MetaMask, which can be downloaded
                                            from the MetaMask website. We support both the browser
                                            plugin and the mobile apps.
                                            We also integrate with WalletConnect, which supports a
                                            number of wallets. The full list can be found on
                                            the WalletConnect website.                    </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThre">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
                                                Where does my NFT go after I purchase a Pakalolo Buzz?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThre" className="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                                        <div className="card-body">
                                            Your wallet will own the NFT. You will be able to see the
                                            contents of your wallet on your OpenSea profile, and some
                                            wallets display your NFTs as well.
                                        </div>                  </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThreew">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>  <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
                                                Sounds awesome - How do I get involved?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThreew" className="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
                                        <div className="card-body">
                                            A great place to start is our Discord, home to a very large and
                                            very active community of Pakalolo enthusiasts. You don't need
                                            to be a Pakalolo holder to join us there! All are welcome to
                                            jump into the conversation, let us know your ideas, and hang
                                            out with many others who like the Buzz!
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThre">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThret" aria-expanded="false" aria-controls="collapseThree">
                                                Are Pakalolo a good investment?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThret" className="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                                        <div className="card-body">
                                            The success of the project depends on many factors. We do
                                            not have a crystal ball so it is impossible to know how it will
                                            go. We strongly believe in our project and think it has a bright
                                            future ahead, but ultimately you will have to decide for
                                            yourself. <br />
                                            Only spend money if you can afford it!
                                        </div>                  </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" id="headingThre">
                                        <h5 className="mb-0">
                                            <i className="fas fa-circle circle_color"></i>
                                            <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThres" aria-expanded="false" aria-controls="collapseThree">
                                                Where did PakaloloBuzz come from?
                                            </button>
                                        </h5>
                                    </div>
                                    <div id="collapseThres" className="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                                        <div className="card-body">
                                            Our team comes from a group of business Men and Women,
                                            that have a number business under their belt. We are looking
                                            to bring a different way for people to make money in the NFT
                                            Web3 marketplace. We are partnering on this project with —-
                                            who is a great artist.
                                        </div>                  </div>
                                </div>

               
                            </div>
                        </div>
                        <h1 className="heading_h1 set_fair pb-1">Fair Distribution </h1>
                        <p className="member_bio">Each NFT art costs 0.14 and are minted randomly, sight unseen.  You never know what you are going to get! Once the initial sale is complete , all Pakalolo will be revealed. You can buy and NFT on the secondary market at OpenSea.io to get specific Pakalolo you want to complete your collection.</p>

		
                    </div>
                </div>
            </section>
            <section id="footer" className="footer_section">
                <div className="container">
                    <div className="row faq_row pt-5 pb-3">
                        <div className="col-sm-12 text-center">
                            <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png" /></a>


                            <div className="main-block pb-3">
                                <a href={twitter} target={{ target: "_blank" }}>
                                    <img className="seicn cbw" src="assets/images/twitter.svg" />
                                </a>

                                <a href={discord} target={{ target: "_blank" }}>
                                    <img className="seicn cbw" src="assets/images/discord.svg" />
                                </a>
                                <a href={opensea} target={{ target: "_blank" }}>
                                    <img className="seicn cbw" src="assets/images/opensea.svg" />

                                </a>
                            </div>
                            <p className="para">
                                © COPYRIGHT 2022 PAKALOLO BUZZ | ALL RIGHTS RESERVED ® </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Web3ReactConnectionComponent;
