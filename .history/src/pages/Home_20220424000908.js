
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
        </div>
		
                </div>
                </div>
				</section>
	</>
  );
}

export default Home;
