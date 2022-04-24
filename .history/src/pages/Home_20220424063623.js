
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
        <section id="pakaloloimg" class="background_sec">
	<div class="container">
		<div class="row mt-5 mb-5">
			<div class="col-12 text-center">
				</div>
				</div>
				</div>
                </section>

	<section id="about_pakalolo" class="first_section">
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
                <div class="row custom_rows p-5 mb-5">
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

                <section  id="pakalolo_faq" class="faq_section">
	<div class="container">
		<div class="row faq_row p-5">
        <div class="col-sm-12">
        <div id="accordion">
               <div class="card">
                  <div class="card-header" id="headingOne">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i>           <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        </button>
                     </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum	
                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingTwo">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                         </button>
                     </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThree">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        	  </button>
                     </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                        </button>
                     </h5>
                  </div>
                  <div id="collapseThre" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThreew">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i>  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
                        SOME QUESTION SOME TEXT SOME QUESTION ?
                       	</button>
                     </h5>
                  </div>
                  <div id="collapseThreew" class="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
                     <div class="card-body">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum                     </div>
                  </div>
               </div>
        </div>
        </div>
		
                </div>
                </div>
				</section>
                                <section  id="footer" class="footer_section">
	<div class="container">
		<div class="row faq_row pt-5 pb-3">
        <div class="col-sm-12 text-center">
        <h1 className="heading_h1">PAKALOLO BUZZ </h1>

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
                   <p className="para"> © COPYRIGHT 2022 PAKALOLO BUZZ | ALL RIGHTS RESERVED ® </p>
        </div>
        </div>
        </div>
        </section>
	</>
  );
}

export default Home;
