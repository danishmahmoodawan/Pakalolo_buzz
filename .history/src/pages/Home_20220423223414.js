
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
		<div class="row  p-5">
        <div class="col-sm-6 text-center">
        <img className="" src="assets/images/images1.gif"/>
        </div>
        <div class="col-sm-6">
        <h1 className="heading_h1">Pakalolo Buzz are what?</h1>
        <p className="para_p">Pakalolo Buzz is a community driven 
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
                </div>
				</section>
	</>
  );
}

export default Home;
