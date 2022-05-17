
import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, resetWalletConnector, walletlink } from './helpers/connectors';
import { getContract } from './helpers/contract';
import React from 'react';
import { ethers } from 'ethers';

// import { ConnectorEvent } from '@web3-react/types'


import { useState } from 'react';
import { useEffect } from 'react';
import { useRef , Fragment, Component } from "react";
import ReactDom from "react-dom";
import './index.css';

import { getProofs } from './helpers/merkletree';


const Web3ReactConnectionComponent = () => {
    const [discord, setdiscord] = useState('https://discord.gg/AzDEGHjs');
    const [twitter, settwitter] = useState('https://twitter.com/PakaloloBuzz');
    const [facebook, setfacebook] = useState('https://www.facebook.com/profile.php?id=100081314853356');
    const [instagram, setinstagram] = useState('https://www.instagram.com/pakalolobuzz/');
    const [opensea, setopensea] = useState('https://opensea.io/');

    const web3reactContext = useWeb3React();
    const [projectName, setProjectName] = useState('Pakalolo Buzz');
    const [tier_level, settier_level] = useState('');
    
    const [claimingNft, setClaimingNft] = useState(false);
    const { ethereum } = window;
    const [metamaskIsInstalled, setmetamaskIsInstalled] = useState("undefined");
    const [walletConnected, setwalletConnected] = useState(false);
    const [dataUpdated, setdataUpdated] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const [networkId, setnetworkId] = useState(-1)
    // const [desiredChain, setDesiredChain] = useState(1)
    const [desiredChain, setDesiredChain] = useState(4)
    
    const [predefinedsupply, setPreDefinedSupply] = useState(10000)
    const [supply, setSupply] = useState({})

    const [mintNumber, setMintNumber] = useState(1)
    const [WLmintNumber, setWLMintNumber] = useState(1)

    const [tokenPrice, setTokenPrice] = useState('0.12');
    const [strTokenPrice, setStrTokenPrice] = useState('0.12Ξ');
    const [strTokenPriceExtra, setStrTokenPriceExtra] = useState(' (0.15Ξ after 20%mint progress)');

    const [WLtokenPrice, WLsetTokenPrice] = useState('0.05');
    const [WLstrTokenPrice, WLsetStrTokenPrice] = useState('0.05Ξ');

    const [showWhitelistButton, setshowWhitelistButton] = useState(false);
    const [isPublicSaleActive, setPublicSaleActive] = useState(true);

    useEffect(() => {
        // Code to Store the last connection
        /*
        try {
            if (localStorage.getItem("wallet_type") == "metamask") {
                connectMetamaskSimple();
            }
            else if (localStorage.getItem("wallet_type") == "coinbase") {
                connectCoinbaseSimple();
            }
            else if (localStorage.getItem("wallet_type") == "walletconnect") {
                connectWalletConnectSimple();
            }
            else {
                // console.log("no metamask")
            }
            // fetchData();
        } catch (error) {
            console.log("error", error)
        }
        */
    }, [])

    
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
                                        <span className="text_icn"> WalletConnect </span></button>
                                </div>
                            </div>
                            <div className="row text-center mt-3 mb-3 ">
                                <div className="col-sm-12">
                                    <button onClick={connectCoinbaseSimple} className="btn_cion btn_cb btn btn-info">
                                        <img className="icon_wallets" src="assets/images/coinbasewallet.svg" />
                                        <span className="text_icn"> CoinBase </span></button>
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
    
    async function fetchData() {
        // setnetworkId(1);
        const contract = getContract(web3reactContext.library, web3reactContext.account);
        const totalSupply = String(await contract.totalSupply());
        let overrides = {
            // gasLimit: 9000000000000000,
            // gasLimit: 9000990111740990, //max
            // gasLimit: 280000000, //200
            gasLimit: 58000000000, //250
        };
        
        /*
        try {
            let total_balance_str = String(await contract.minimumTokenByWallet(web3reactContext.account, overrides));
            // console.log("total_balance_str", total_balance_str);
            let total_balance = parseInt(total_balance_str);
            console.log("total_balance", total_balance);
            console.log("totalSupply", totalSupply);

            let maxSupply = parseInt(String(await contract.MAX_SUPPLY()));
            console.log("maxSupply", maxSupply);

            // // ---------------------
            // // const total_balance_str2 = await contract;
            // // console.log("ASd", total_balance_str2)
            // 
            // const total_balance_str = String(await contract.walletOf(web3reactContext.account, overrides));
            // // const total_balance_str = String(await contract.walletOf(web3reactContext.account));
            // // const total_balance_str = String("0,1,2,3,4");
            
            if (total_balance === maxSupply+1) {
                console.log("Buy some stuff man");
                settier_level(<li className="nav-item">
                                        <a className="nav-link" href="#"><button className='btn btn-danger'>No Bull-No Tier</button></a>
                                    </li>)
            }

            else {
                // const total_balance = total_balance_str.split(",").map(Number);
                
                
                // var arrayLength = total_balance.length;
                // var min_token;
                // for (var i = 0; i < arrayLength; i++) {
                //     // console.log(total_balance[i]);
                //     if (min_token === undefined || min_token > total_balance[i]) {
                //         min_token = total_balance[i]
                //     }
                //     //Do something
                // }
                
                console.log("Max Valulable Token ID", total_balance);
                if (total_balance >= 0 && total_balance <= 777) {
                    settier_level(<li className="nav-item">
                                        <a className="nav-link" href="#">Tier 1 Diamond</a>
                                    </li>)
                } else if (total_balance > 777 && total_balance <= 1500) {
                    settier_level(<li className="nav-item">
                                        <a className="nav-link" href="#">"Tier 2 Gold"</a>
                                    </li>)
                } else if (total_balance > 1500 && total_balance <= 3000) {
                    settier_level(<li className="nav-item">
                                        <a className="nav-link" href="#">"Tier 3 Bronze"</a>
                                    </li>)
                } else if (total_balance > 3000 && total_balance <=7777) {
                    settier_level(<li className="nav-item">
                                        <a className="nav-link" href="#">Tier 4 Silver</a>
                                    </li>)
                }

                console.log("total_balance", total_balance, total_balance);
            }
            
        } catch (error) {
            console.log(error)
        }
        */
    
        
        // console.log(ethers.utils.formatEther(tempPrice))
        const object = { "totalSupply": String(totalSupply), "percent": String(String((totalSupply / predefinedsupply * 100)).slice(0, 4) + '%') }
        setSupply(object);
        setdataUpdated(true);
        // console.log("data fetched from contract")

    }

    async function decreaseMintNumber() {
        if (mintNumber > 1)
            setMintNumber(mintNumber - 1);
    };
    async function increaseMintNumber() {
        if (mintNumber < 10)
            setMintNumber(mintNumber + 1);
    };

    async function WLdecreaseMintNumber() {
        if (WLmintNumber > 1)
            setWLMintNumber(WLmintNumber - 1);
    };
    async function WLincreaseMintNumber() {
        if (WLmintNumber < 5)
            setWLMintNumber(WLmintNumber + 1);
    };

    const changeNetwork = async () => {
        if (window.ethereum) {
            try {
                await window.ethereum.enable();
                // window.ethereum._handleChainChanged({
                //   chainId: "0x1",
                //   networkVersion: '1',
                // });
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: '0x1' }],
                });
                window.location.reload(false);
            } catch (error) {
                if (error.code === 4902) {
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
    };

    async function take_action(id) {
        
        // console.log("web3reactContext", web3reactContext)
        
        if (web3reactContext.connector === undefined) {
            
            openModal();
            return
        }
        else if (web3reactContext.chainId !== desiredChain) {
            setError("Make sure you are on Etherium Mainnet");
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

                // var metamaskIsInstalled = ethereum && ethereum.isMetaMask
                // setmetamaskIsInstalled(metamaskIsInstalled);

                // const networkId = await ethereum.request({
                //     method: "net_version",
                // });
                // if (1 == parseInt(networkId) && metamaskIsInstalled === true){
                // if ( metamaskIsInstalled === true ){}
                
                let transaction;
                if (mintType === 'mint') {
                    console.log("minting method")
                    transaction = await myContractSigner.regularMint(mintNumber, { value: ethers.utils.parseEther(total_price) });
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
                    transaction = await myContractSigner.connect(signer).preMint(buyerproof, WLmintNumber, { value: (ethers.utils.parseEther(total_price)) })
                    await transaction.wait();

                }
                // }
                else {
                    return
                }

                console.log("Transaction Done ", "https://etherscan.io/tx/"+transaction.hash);
                setMessage("NFTs Minted Successfully");
                fetchData();
                setError("");
                setClaimingNft(false);

            }
            catch (err) {
                console.log("Error", err)
                setMessage("");

                if (err?.code === 4001) {
                    // console.log("User Declined Payment")
                    setError("User Declined Payment");
                }

                if (err?.error?.code === -32000) {
                    // console.log("You have Insufficient Balance")
                    setError("You have Insufficient Balance");
                }

                if (err?.code === -32002) {
                    // console.log("Transaction In Process")
                    setError("Transaction In Process - Open Metamask");
                }

                if (err?.error?.code === -32603) {
                    if (err?.error?.message === "execution reverted: Not on whitelist") {
                        setError("Address Not Whitelisted");
                    }
                    else if (err?.error?.message === "execution reverted: No presale for now") {
                        setError("Presale Not Started Yet");
                    }
                    else {
                        setError("Exceeded Max Token Purchase");
                    }
                }

                // setError(err.message);
                setClaimingNft(false);
            }

        }
    }
    
    const disconnect = () => {
        try {
            web3reactContext.deactivate();
        } catch (ex) {
            console.log(ex);
        }
    };

    //web3react context
    const checkInfoSimple = async () => {
        try {
            console.log('web3reactContext');
            console.log(web3reactContext);
        } catch (ex) {
            console.log(ex);
        }
    };

    //web3react metamask
    const connectMetamaskSimple = async () => {
        try {
            await web3reactContext.activate(injected);
            

            var metamaskIsInstalled = ethereum && ethereum.isMetaMask
            setmetamaskIsInstalled(metamaskIsInstalled);
            if (typeof metamaskIsInstalled === 'undefined') {
                // console.log('setmetamaskIsInstalled',metamaskIsInstalled)
                // console.log('web3reactContext',web3reactContext)
                setShowModal(false);
                setError("Metamask Not Installed")
                web3reactContext.deactivate();
                return
            }
            setShowModal(false);
            setMessage("Metamask Wallet Connected");
            setwalletConnected(true);
            localStorage.setItem("wallet_type", "metamask");

            

        } catch (ex) {
            console.log("Metamask Connection Error", ex);
            setError("Metamask Connection Error");
        }
        
    };

    //web3react walletconnect
    const connectWalletConnectSimple = async () => {
        try {
            resetWalletConnector(walletconnect);
            await web3reactContext.activate(walletconnect);
            setShowModal(false);
            setMessage("WalletConnect Connected");
            setwalletConnected(true);
            localStorage.setItem("wallet_type", "walletconnect");
        } catch (ex) {
            setError("WalletConnect Connection Error")
            console.log("WalletConnect Connection Error", ex);
        }
    };

    //web3react coinbase
    const connectCoinbaseSimple = async () => {
        try {
            await web3reactContext.activate(walletlink);
            setShowModal(false);
            setMessage("Coinbase Wallet Connected");
            setwalletConnected(true);
            localStorage.setItem("wallet_type", "coinbase");
            
        } catch (ex) {
            setError("Coinbase Wallet Connection Error")
            console.log("Coinbase Wallet Connection Error", ex);
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
                            <li className="nav-item active">
                                <a className="nav-link" href="#pakaloloimg">Pakalolo</a>
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
            <section id="pakaloloimg" className="background_sec">
                <div className="container">
                    <div className="row mt-5 mb-5">
                        <div className="col-12 text-center">
                        </div>
                    </div>
                </div>
            </section>

            <section id="connect_pakalolo" className="first_section connect_section">
                <div className="container">
                    <div className="row custom_row p-5">
                       
                        <div className="col-sm-12">
                       
                    <div id="mint" className="herofour">
                        { error && (
                            <>
                                { error === "Make sure you are on Etherium Mainnet" ? (
                                    <div className='text-center mint_under_button'>
                                        <button className="btn" onClick={changeNetwork} >
                                            <span className="bg-danger text-light">Switch to Mainnet Ethereum</span>
                                        </button>
                                    </div>
                                ):(
                                    <div className="row">
                                        <div className="col-sm  text-center ">
                                            <div className="buttons_mint_div">
                                                <button className=" m-2 btn btn-danger">{error}</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )}
                            </>
                            )      
                        }
                        
                        
                        { message &&
                            <div className='text-center mint_under_button'>
                                <p className="bg-success text-light">{message}</p>
                            </div>
                        }

                        {walletConnected ?
                            (<>
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
                                                
                                            
                                                {isPublicSaleActive ? (
                                                    <>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <div className="buttons_mint_div">
                                                                    <button className="mintbtn m-2" onClick={decreaseMintNumber}>-</button>
                                                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => take_action(1)}>{claimingNft ? "BUSY" : "MINT"} {mintNumber}</button>

                                                                    <button className="mintbtn m-2" onClick={increaseMintNumber}>+</button>
                                                                        <span className="d-block"><strong>{strTokenPrice}</strong></span>
                                                                    <span className="d-block">Max Mint 10</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </>
                                                    ): (
                                                    <></>
                                                )}

                                                { isPublicSaleActive && showWhitelistButton ? (
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <br></br>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ): (
                                                    <></>
                                                )}

                                                

                                                {showWhitelistButton ? (
                                                    <div>
                                                        <div className="row">
                                                            <div className="col-sm  text-center ">
                                                                <div className="buttons_mint_div">
                                                                    <button className="mintbtn m-2" onClick={WLdecreaseMintNumber}>-</button>
                                                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => take_action(2)}>{claimingNft ? "BUSY" : "WL MINT"} {WLmintNumber}</button>

                                                                    <button className="mintbtn m-2" onClick={WLincreaseMintNumber}>+</button>
                                                                    <span className="d-block"><strong>{WLstrTokenPrice}</strong></span>
                                                                    <span className="d-block">Max Mint 5</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    ): (
                                                    <></>
                                                )}
                                                
                                            </>)
                                        }
                                    </>) :
                                    (
                                    <>
                                        <div className="row">
                                            <div className="col-sm  text-center ">
                                                <div className="buttons_mint_div">
                                                    <button className="mintbtn m-2" disabled={claimingNft ? 1 : 0} onClick={() => fetchData()}>Update</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                    )
                                    
                                }
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
            <section id="about_pakalolo" className="about_pakalolo">
                <div className="container">
                    <div className="row custom_sec_row p-5">
                        <div className="col-sm-6 text-center">
                            <img className="img_set" src="assets/images/65.png" />
                        </div>
                        <div className="col-sm-6">
                            <h1 className="heading_h1">Pakalolo Buzz are what?</h1>
                            <p className="para_p">Pakalolo Buzz is a community driven collection of 10k randomly generated NFT’s on the Ethereum blockchain.<br />
                                Each Pakalolo is totally unique and comes with different traits and varying in rarity. <br /> <br />
                                Each one will be your ticket into the 1st Web3 membership platform for profit sharing supporting other creative minds. <br />
                            </p>
                        </div>
                
                    </div>

                    <div className="row custom_rows p-5 mb-5">
                        <div className="col-sm-6 ">
                            <h1 className="heading_h1">HOW DOES THIS WORK?</h1>
                            <p className="para_p">Pakalolo Buzz holders can participate
                                claims, raffles, giveaways, maybe add potential profit sharing and much,
                                much more. <br /><br />
                                Don't forget, all Pakalolo are special --
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


            <section id="about_team" className="team_section">
                <div className="container-fluid">
                    <div className="row team_row text-center">
                        <div className="col-12">
                            <h1 className="heading_h1 pb-5">TEAM</h1></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/56.png" />
                                    <div className="team-socials">
                                        <a href={twitter} target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                    </div> </div>
                                <div className="content_member">
                                    <h3 className="member_name">Brandon</h3>
                                    <h3 className="member_disg">Smoking Tester</h3>
                                    <span className="member_bio">I am a seasoned entrepreneur, with several business. I was introduced to crypt a few years ago and have now turned my attention to NFT’s and the projects and the smart chair contract can be used for.</span>
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
                                        Yes we had computers back then. I have been in the website building to games on the app stores. I look forward to bring some ideas to the NFT market that will hopefully bring some income to us all. More to come about that but we are going to help some holds of our NFT’s make there on project ROAD MAP.
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
                                    </div> </div>
                                <div className="content_member">
                                    <h3 className="member_name">Galictic NFT <br /> Studio</h3>
        
                                    <span className="member_bio">We are a team of professional print on demand sellers and designers. With several years of experience in this field, we will be able to help you on your journey to success! Our team consists of handpicked members that highly value customer satisfaction. Great design involves thinking outside the box and letting ideas come from infinity and that’s how We approach every design</span>
                                </div>
    
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-3 text-center">
                            <div className="member_card">
                                <div className="member_image"><img className="img_sm" src="assets/images/34.png" />
                                    <div className="team-socials">
                                        <a href="https://twitter.com/syed_eth" target={{ target: "_blank" }}>
                                            <img className="seicon" src="assets/images/twitter.svg" />
                                        </a>
                                    </div> </div>
                                <div className="content_member">
                                    <h3 className="member_name">Syed Qasim</h3>
                                    <h3 className="member_disg">Dev Developer</h3>
                                    <span className="member_bio">Syed is The Co-Founder of Galictic NFT Studio. I just love the vibe of NFTs since Late 2020s, Smart Contract Deployer and Advanced NFT Generation.</span>
                                </div>
    
                            </div>
                        </div>
    
                    </div>
          
                </div>
                <p className="para text-center set_earn"> if you are interested in getting help with your on NFT's project please contact <a className="aref" href="mailto:Support@pakalolo.io" target={{ target: "_blank" }}>Support@pakalolo.io</a>
                </p>
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
                                    <li>Launch Minting</li>
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
                                        of the profits! Move on this later, but we are looking to
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
                                        to grow the Pakalolo Buzz community Income through the joint
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
