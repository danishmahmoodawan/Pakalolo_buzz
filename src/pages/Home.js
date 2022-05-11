
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
                            <a className="nav-link" href="#pakaloloimg">Pakalolo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about_pakalolo">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#pakalolo_faq">FAQs</a>
                        </li>
                        
                    </ul>
                    <span className="navbar-text" >
                            <a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            <a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/discord.svg"/>
                            </a>
                            <a href="https://opensea.io/collection" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/opensea.svg"/>
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

	<section id="about_pakalolo" className="first_section">
	<div className="container">
		<div className="row custom_row p-5">
        <div className="col-sm-6 text-center">
        <img className="img_set" src="assets/images/65.png"/>
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
much more. <br/><br/>
Don't forget, all Pakalolo are special -- 
but some are exceptionally special.<br/>
... and the best is yet to come, check 
out our roadmap below.</p>
        </div>
        <div className="col-sm-6 text-center">

<img className="img_set" src="assets/images/78.png"/>

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
        <div className="member_image"><img className="img_sm" src="assets/images/56.png"/>
        <div className="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
        <div className="content_member">
        <h3 className="member_name">Smoking Tester</h3>
        <h3 className="member_disg">Creative Director</h3>
        <span className="member_bio">I am a seasoned entrepreneur, with several business. I was introduced to crypt a few years ago and have now turned my attention to NFT’s and the projects and the smart chair contract can be used for.</span>
        </div>
    
        </div>
       </div>

         <div className="col-sm-12 col-md-6 col-lg-3 text-center">
      <div className="member_card">
        <div className="member_image"><img className="img_sm" src="assets/images/64.png"/>
        <div className="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
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
        <div className="member_image"><img className="img_sm" src="assets/images/59.png"/>
        <div className="team-socials">
<a href="https://www.instagram.com/galictic_nftstudio/" target={{target:"_blank"}}>
                            <img className="secicona" src="assets/images/icon/icons8-instagram.svg"/>
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
        <div className="member_image"><img className="img_sm" src="assets/images/34.png"/>
        <div className="team-socials">
<a href="https://twitter.com/syed_eth" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
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
                <img className="seicn cbw img-fluid" src="assets/images/twitter.svg"/>
                <img className="seicn cbw" src="assets/images/discord.svg"/>
                <img className="seicn " src="assets/images/icon/icons8-instagram.svg"/>
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


                <section  id="pakalolo_faq" className="faq_section">
	<div className="container">
		<div className="row faq_row p-5">
        <div className="col-sm-12">
        <p className="para text-center"> if you are interested in get help with your on NFT projects please contact <a className="aref" href="mailto:Support@pakalolo.io" target={{target:"_blank"}}>Support@pakalolo.io</a>
</p>
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
                                <section  id="footer" className="footer_section">
	<div className="container">
		<div className="row faq_row pt-5 pb-3">
        <div className="col-sm-12 text-center">
        <a className="navbar-brand" href="#"><img className="logo_s" src="assets/images/logo.png"/></a>


        <div className="main-block pb-3"> 
                   <a href="https://twitter.com" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="assets/images/twitter.svg"/>
                   </a>

                   <a href="https://discord.com" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="assets/images/discord.svg"/>
                            </a>
                   <a href="https://opensea.io/collection" target={{target:"_blank"}}>
                   <img className="seicn cbw" src="assets/images/opensea.svg"/>

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
}

export default Home;
