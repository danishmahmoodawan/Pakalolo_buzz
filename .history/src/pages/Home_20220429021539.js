
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


                <section id="about_team" class="team_section">
	<div class="container-fluid">
		<div class="row team_row text-center">
        <div class="col-12">
        <h1 class="heading_h1 pb-5">TEAM</h1></div>
        </div>
        <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-3 text-center">
      <div class="member_card">
        <div class="member_image"><img className="img_sm" src="assets/images/team_mikael.png"/>
        <div class="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
        <div class="content_member">
        <h3 class="member_name">kickRRR / Mikael Tyrsen</h3>
        <h3 class="member_disg">Creative Director</h3>
        <span class="member_bio">Mikael Tyrsen is an award winning Los Angeles based Director inspired to bring big ideas to life through creative filmmaking. Former co-founder of Umbrella Games. Creator of Monster Merge & other AppStore top 10 video games.</span>
        </div>
    
        </div>
       </div>

         <div class="col-sm-12 col-md-6 col-lg-3 text-center">
      <div class="member_card">
        <div class="member_image"><img className="img_sm" src="assets/images/team_mikael.png"/>
        <div class="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
        <div class="content_member">
        <h3 class="member_name">kickRRR / Mikael Tyrsen</h3>
        <h3 class="member_disg">Creative Director</h3>
        <span class="member_bio">Mikael Tyrsen is an award winning Los Angeles based Director inspired to bring big ideas to life through creative filmmaking. Former co-founder of Umbrella Games. Creator of Monster Merge & other AppStore top 10 video games.</span>
        </div>
    
        </div>
       </div>


         <div class="col-sm-12 col-md-6 col-lg-3 text-center">
      <div class="member_card">
        <div class="member_image"><img className="img_sm" src="assets/images/team_mikael.png"/>
        <div class="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
        <div class="content_member">
        <h3 class="member_name">kickRRR / Mikael Tyrsen</h3>
        <h3 class="member_disg">Creative Director</h3>
        <span class="member_bio">Mikael Tyrsen is an award winning Los Angeles based Director inspired to bring big ideas to life through creative filmmaking. Former co-founder of Umbrella Games. Creator of Monster Merge & other AppStore top 10 video games.</span>
        </div>
    
        </div>
       </div>


         <div class="col-sm-12 col-md-6 col-lg-3 text-center">
      <div class="member_card">
        <div class="member_image"><img className="img_sm" src="assets/images/team_mikael.png"/>
        <div class="team-socials">
<a href="https://twitter.com" target={{target:"_blank"}}>
                            <img className="seicon" src="assets/images/twitter.svg"/>
                            </a>
                            </div> </div>
        <div class="content_member">
        <h3 class="member_name">kickRRR / Mikael Tyrsen</h3>
        <h3 class="member_disg">Creative Director</h3>
        <span class="member_bio">Mikael Tyrsen is an award winning Los Angeles based Director inspired to bring big ideas to life through creative filmmaking. Former co-founder of Umbrella Games. Creator of Monster Merge & other AppStore top 10 video games.</span>
        </div>
    
        </div>
       </div>
		
                </div>
          
				</div>
				</section>

  <section id="roadmap" class="roadmap">
  <div class="container">
<div class="timeline">
		<div class="timeline-row">
			<div class="timeline-time">
				<h3 class="heading_h1 ">Phase 1</h3>
			</div>
			<div class="timeline-content">
				<i class="icon-attachment"></i>
				<p class="timeline_phase"> 
                <>Launch Twiter, Instagram, Discord Communitys
                </p>
				<div class="thumbs">
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
				</div>
				<div class="">
					<span class="badge badge-pill">Sales</span>
					<span class="badge badge-pill">Admin</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				8:00 AM<small>Dec 18</small>
			</div>
			<div class="timeline-content">
				<i class="icon-code"></i>
				<h4>Admin Dashboard!</h4>
				<p>
					Maxwell Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar.
				</p>
				<div class="thumbs">
					<div class="thumbs">
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
				</div>
				</div>
				<div class="">
					<span class="badge badge-pill">Graphs</span>
					<span class="badge badge-pill">Chat</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				7:25 PM<small>Dec 6</small>
			</div>
			<div class="timeline-content">
				<i class="icon-turned_in_not"></i>
				<h4>Best Admin Template!</h4>
				<p>Custom C3 graphs, Custom flot graphs, flot graphs, small graphs, Sass, profile and timeline.</p>
				<div>
					<span class="badge badge-pill">Invoice</span>
					<span class="badge badge-pill">Tasks</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				3:55 PM<small>Dec 26</small>
			</div>
			<div class="timeline-content">
				<i class="icon-directions"></i>
				<h4>Maxwell Admin</h4>
				<p>Maxwell Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar, drag &amp; drop and ion slider.</p>
				<div>
					<span class="badge badge-pill">Profile</span>
					<span class="badge badge-pill">Sales</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				5:24 PM<small>Dec 12</small>
			</div>
			<div class="timeline-content">
				<i class="icon-change_history"></i>
				<h4>Maxwell Dashboard</h4>
				<p class="no-margin">Maxwell Admin dashboard includes invoice, profile, tasks, gallery, projects, maintanence.</p>
				<div class="thumbs">
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="Maxwell Admin" />
				</div>
				<div>
					<span class="badge badge-pill">Analytics</span>
					<span class="badge badge-pill">Contacts</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				8:00 AM<small>Dec 18</small>
			</div>
			<div class="timeline-content">
				<i class="icon-code"></i>
				<h4>Admin Dashboard!</h4>
				<p>
					Maxwell Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar.
				</p>
				<div class="thumbs">
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="Maxwell Admin" />
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
				</div>
				<div class="">
					<span class="badge badge-pill">Ecommerce</span>
					<span class="badge badge-pill">CRM</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-time">
				7:45PM<small>Dec 21</small>
			</div>
			<div class="timeline-content">
				<i class="icon-attachment"></i>
				<h4>Admin Template!</h4>
				<p>Maxwell Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar, drag &amp; drop and ion slider.</p>
				<div class="thumbs">
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="Maxwell Admin" /> 
					<img class="img-fluid rounded" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="Maxwell Admin" />
				</div>
				<div class="">
					<span class="badge badge-pill">Orders</span>
					<span class="badge badge-pill">Sales</span>
				</div>
			</div>
		</div>

		<div class="timeline-row">
			<div class="timeline-content">
				<p class="m-0">Loading...</p>
			</div>
		</div>

	</div>
</div>
    
        </section>


                <section  id="pakalolo_faq" class="faq_section">
	<div class="container">
		<div class="row faq_row p-5">
        <div class="col-sm-12">
        <h1 class="heading_h1 pb-3">Frequently Asked Questions  </h1>
        <div id="accordion">
               <div class="card">
                  <div class="card-header" id="headingOne">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i>           <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                     What are NFTs?                        </button>
                     </h5>
                  </div>
                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                     <div class="card-body">
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
               <div class="card">
                  <div class="card-header" id="headingTwo">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        What is Ethereum?
                         </button>
                     </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                     <div class="card-body">
                     Ethereum is the community-run technology powering the 
cryptocurrency ether (ETH) and thousands of decentralized 
applications. Learn more on ethereum.org
                                          </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThree">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     What Wallets are Supported?
                        	  </button>
                     </h5>
                  </div>
                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                     <div class="card-body">
                     We recommend using MetaMask, which can be downloaded 
from the MetaMask website. We support both the browser 
plugin and the mobile apps.
We also integrate with WalletConnect, which supports a 
number of wallets. The full list can be found on 
the WalletConnect website.                    </div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThre" aria-expanded="false" aria-controls="collapseThree">
                        Where does my NFT go after I purchase a Pakalolo Buzz?
                        </button>
                     </h5>
                  </div>
                  <div id="collapseThre" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                     Your wallet will own the NFT. You will be able to see the 
contents of your wallet on your OpenSea profile, and some 
wallets display your NFTs as well.
</div>                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThreew">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i>  <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThreew" aria-expanded="false" aria-controls="collapseThree">
                      Sounds awesome - How do I get involved?
                       	</button>
                     </h5>
                  </div>
                  <div id="collapseThreew" class="collapse" aria-labelledby="headingThreew" data-parent="#accordion">
                     <div class="card-body">
                     A great place to start is our Discord, home to a very large and 
very active community of Pakalolo enthusiasts. You don't need 
to be a Pakalolo holder to join us there! All are welcome to 
jump into the conversation, let us know your ideas, and hang 
out with many others who like the Buzz!
</div>
                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThret" aria-expanded="false" aria-controls="collapseThree">
                        Are Pakalolo a good investment?
                        </button>
                     </h5>
                  </div>
                  <div id="collapseThret" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                     The success of the project depends on many factors. We do 
not have a crystal ball so it is impossible to know how it will 
go. We strongly believe in our project and think it has a bright 
future ahead, but ultimately you will have to decide for 
yourself. <br />
Only spend money if you can afford it!
</div>                  </div>
               </div>
               <div class="card">
                  <div class="card-header" id="headingThre">
                     <h5 class="mb-0">
                     <i class="fas fa-circle circle_color"></i> 
                        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThres" aria-expanded="false" aria-controls="collapseThree">
                        Where did PakaloloBuzz come from?
                        </button>
                     </h5>
                  </div>
                  <div id="collapseThres" class="collapse" aria-labelledby="headingThre" data-parent="#accordion">
                     <div class="card-body">
                     Our team comes from a group of business Men and Women, 
that have a number business under their belt. We are looking 
to bring a different way for people to make money in the NFT 
Web3 marketplace. We are partnering on this project with —- 
who is a great artist.
</div>                  </div>
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
