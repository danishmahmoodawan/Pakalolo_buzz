
import { useState, useEffect } from 'react';
function Home() {
    
  return (
   <> 
   <div className="cotainer bg-nav" style={{paddingLeft: "10%",paddingRight: "10%"}}>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#zerosection">Zero</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#roadmapsection">Roadmap</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#teamsection">Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faqsection">FAQs</a>
                        </li>
                    </ul>
                    <span className="navbar-text" >
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            <a href="https://twitter.com/zerozeronft" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/discord.svg"/>
                            </a>
                            <a href="https://opensea.io/collection/zero-project" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/opensea.svg"/>
                            </a>
                    </span>
                </div>
            </nav>
        </div>
        <section class="background_sec">
	<div class="container">
		<div class="row mt-5 mb-5">
			<div class="col-12 text-center">
				</div>
				</div>
				</div>
                </section>

	<section class="first_section">
	<div class="container">
		<div class="row custom_row p-5">
        <div class="col-sm-6 text-center">
        <img className="img_set" src="assets/images/images1.gif"/>
        </div>
        <div class="col-sm-6">
        <h1 className="heading_h1">Pakalolo Buzz are what?</h1>
        <p className="para_p">Pakalolo Buzz is a community driven <br/>
collection of 10k randomly generated 
NFTs on the Ethereum blockchain
Each Pakalolo is totally unique and 
comes with different traits and 
varying in rarity. An will be as your 
ticket into the first Web3 Membership 
platform for profit sharing and 
supporting other creative minds.</p>
        </div>
		
                </div>
                <div class="row custom_rows p-5">
        <div class="col-sm-6 ">
        <h1 className="heading_h1">HOW DOES THIS WORK?</h1>
        <p className="para_p">Pakalolo Buzz holders can participate 
in exclusive events, such as: NFT 
claims, raffles, giveaways and much, 
much more. <br/><br/>
Don't forget, all Pakalolo are special -- 
but some are exceptionally special.<br/>
... and the best is yet to come, check 
out our roadmap below.</p>
        </div>
        <div class="col-sm-6 text-center">

<img className="img_set" src="assets/images/images1.gif"/>

        </div>
			
				</div>	
				</div>
				</section>

                <section class="faq_section">
	<div class="container">
		<div class="row faq_row p-5">
        <div class="col-sm-12">
        <h1 className="heading_h1 text-center">Frequently Asked Questions</h1>
        <h3 className="heading_h1 set_head">What are NFTs?</h3>
        <p className="para_p">A non-fungible token (NFT) is a non-interchangeable unit ofdata stored on a blockchain, a form of digital ledger, that can
be sold and traded.NFTs may be associated with digital files such as photos,videos, and audio. Because each token is uniquely identifiable,NFTs differ from blockchain cryptocurrencies, such as
Bitcoin.</p>
<h3 className="heading_h1 set_head">What is Ethereum?</h3>
        <p className="para_p">Ethereum is the community-run technology powering thecryptocurrency ether (ETH) and thousands of decentralized
applications. Learn more on ethereum.org</p>
<h3 className="heading_h1 set_head">What Wallets are Supported?</h3>
        <p className="para_p">We recommend using MetaMask, which can be downloaded
from the MetaMask website. We support both the browserplugin and the mobile apps. We also integrate with WalletConnect, which supports a number of wallets. The full list can be found onthe WalletConnect website.</p>
<h3 className="heading_h1 set_head">Where does my NFT go after I purchase a Pakalol Buzz?
</h3>
        <p className="para_p">Your wallet will own the NFT. You will be able to see the contents of your wallet on your OpenSea profile, and some
wallets display your NFTs as well.</p>
<h3 className="heading_h1 set_head">Sounds awesome - How do I get involved?</h3>
        <p className="para_p">A great place to start is our Discord, home to a very large andvery active community of Pakalolo enthusiasts. You don't need
to be a Pakalolo holder to join us there! All are welcome tojump into the conversation, let us know your ideas, and hang
out with many others who like the Buzz!</p>
<h3 className="heading_h1 set_head">Are Pakalolo a good investment?</h3>
        <p className="para_p">The success of the project depends on many factors. We do not have a crystal ball so it is impossible to know how it will
go. We strongly believe in our project and think it has a bright future ahead, but ultimately you will have to decide for yourself. <br/>
Only spend money if you can afford it!</p>
<h3 className="heading_h1 set_head">Where did PakaloloBuzz come from?</h3>
        <p className="para_p">Our team comes from a group of business Men and Women,
that have a number business under their belt. We are looking
to bring a different way for people to make money in the NFT
Web3 marketplace. We are partnering on this project with —-
who is a great artist.
</p>
        </div>
		
                </div>
                </div>
				</section>
	</>
  );
}

export default Home;
