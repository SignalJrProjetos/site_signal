import React from "react";
import "../assets/styles/global.css";
import "../screens/home.css";
import { Navbar } from "../components/Navbar/Navbar";
import { Contact } from "../components/Contact/Contact";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Testimonial } from "../components/Testimonial/Testimonial";
import  Carousel  from "react-bootstrap/Carousel";
import border from "../assets/svg/border.svg";
import bannerImg from "../assets/svg/img.home-banner.svg";
import facebookIco from "../assets/svg/icon.facebook.svg";
import instagramIco from "../assets/svg/icon.instagram.svg";
import linkedinIco from "../assets/svg/icon.linkedin.svg";
import { Solutions } from "../components/Solutions/Solutions";
import aboutLogo from "../assets/imgs/logo.SignalCompacta.png";
import UFRRJ from "../assets/imgs/logo.UFRRJPartners.png";
import Brasil from "../assets/imgs/logo.Brasil JuniorPartners.png";
import Rio from "../assets/imgs/logo.Rio JuniorPartners.png";
import TOTVS from "../assets/imgs/logo.TOTVSPartners.png";
import Americanas from "../assets/imgs/logo.AmericanasPartners.png";
import Empower from "../assets/imgs/logo.EmpowerPartners.png";

export const Home = () =>{
	
	return (
		<div className="App">
			<>
				<ParticlesContainer/>
				<Navbar/>

				{/* Banner */}
				<img className="bannerBorder" src={border}/>
				<div className="bannerTextContainer">
					<div>
						<h1>
							A solução digital ideal para o seu negócio.
						</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, urna egestas convallis hendrerit, 
							purus arcu consectetur sapien, eget molestie mi elit sed erat. Curabitur vel ullamcorper odio. Nulla ullamcorper 
							massa sit amet aliquam elementum. Vestibulum faucibus sem sit amet quam lacinia suscipit. 
						</p>
						<br></br>
						<br></br>
						<a className="buttonWhite" style={{"fontFamily": "Saira", "fontSize": "28px", "position": "relative"}} href="">Saiba Mais</a>
					</div>
					<div>
						<img className="bannerImg" src={bannerImg}/>
					</div>
					<div className="bannerSocialMediaContainer">
						<p>SIGA-NOS</p>
						<br></br>
						<a style={{"marginLeft": "4px"}} href=""><img src={facebookIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href=""><img src={instagramIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href=""><img src={linkedinIco}/></a>
					</div>
				</div>

				<Solutions/>

				{/*Sobre Nós*/}

				{/*
				<div className="aboutContainer">
					
					<img className="aboutImg"  src={aboutLogo} alt=""/>
					<div className='aboutUsText'>
						<div className="aboutUsTitle">
							<h1>Sobre Nós</h1>
						</div>
						<h2>Lorem ipsum dolor sit amet consectetur adipiscing elit </h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat mattis vehicula. Nam semper ullamcorper sem, ut tincidunt nulla pharetra id. Duis quam quam, venenatis egetfelis vel, aliquam fringilla eros.</p>
						<button id="aboutUsButton">Saiba mais</button>
					</div>
				</div>
	*			*/}

				<div>
					<ParticlesContainer/>
					<Contact/>
				</div>

				{/* Depoimentos */}
				<div className="testimonialsContainer" style={{"marginTop":"48px"}}>
					<div className="testimonialsTextContainer">
						<h2>Depoimentos</h2>
						<h1 className="title">O que nossos clientes falam</h1>
					</div>

					{/* Cada Carousel.Item corresponde a um componente */}
					<Carousel>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
					</Carousel>
				</div>

				{/* Parceiros*/}
				{/*
				<div className="partnersImagesTitle">
					<h1>Parceiros</h1>
				</div>
           
				<div>
					<ul id="partnersImagesList">
						<li>
							<img src={UFRRJ} alt=""/>
						</li>

						<li>
							<img src={Brasil} alt=""/>
						</li>
                
						<li>
							<img src={Rio} alt=""/>
						</li>
                
						<li>
							<img src={TOTVS} alt=""/>
						</li>
               
						<li>
							<img src={Empower} alt=""/>
						</li>
                
						<li>
							<img src={Americanas} alt=""/>
						</li>

					</ul>
				</div>
				*/}

			</>
		</div>
	);
};