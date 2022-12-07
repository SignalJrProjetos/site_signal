import React from "react";
import "../assets/styles/global.css";
import "../screens/home.css";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { Solutions } from "../components/Solutions/Solutions";
import { Contact } from "../components/Contact/Contact";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components/Footer/Footer";
import  Carousel  from "react-bootstrap/Carousel";
import border from "../assets/svg/header.border.svg";
import headerImg from "../assets/svg/img.home-header.svg";
import facebookIco from "../assets/svg/icon.facebook.svg";
import instagramIco from "../assets/svg/icon.instagram.svg";
import linkedinIco from "../assets/svg/icon.linkedin.svg";
import aboutLogo from "../assets/svg/logo.SignalSymbolBg.svg";
import UFRRJ from "../assets/svg/logo.UFRRJPartners.svg";
import Brasil from "../assets/svg/logo.Brasil JuniorPartners.svg";
import Rio from "../assets/svg/logo.Rio JuniorPartners.svg";
import TOTVS from "../assets/svg/logo.TOTVSPartners.svg";
import Americanas from "../assets/svg/logo.AmericanasPartners.svg";
import Empower from "../assets/svg/logo.EmpowerPartners.svg";


export const Home = () =>{
	
	return (
		<div className="App">
			<ParticlesContainer/>
			<Navbar/>

			{/* Header */}
			<div className="headerContainer">
				<div className="headerTextContainer">
					<div>
						<h1>
								A solução digital ideal para o seu negócio.
						</h1>
						<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, urna egestas convallis hendrerit, 
								purus arcu consectetur sapien, eget molestie mi elit sed erat. Curabitur vel ullamcorper odio. Nulla ullamcorper 
								massa sit amet aliquam elementum. Vestibulum faucibus sem sit amet quam lacinia suscipit. 
						</p>
						<div className="headerButton" style={{"marginTop":"8%"}}>
							<a className="buttonWhite" href="">Saiba Mais</a>
						</div>
					</div>
					<div>
						<img id="headerImg" src={headerImg}/>
					</div>
					<div className="headerSocialMediaContainer">
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
			</div>
			<img className="headerBorder" src={border}/>
			<Solutions/>

			{/*Sobre Nós*/}

			{/*
				<div className="aboutContainer">
					<div className="aboutTextContainer">
						<h2 className="subtitle">Sobre Nós</h2>
						<h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, 
							lobortis ac justo vel, auctor dictum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed 
							nisi euismod suscipit.
						</p>
						<br/>
						<a className="buttonPurple2" href="">Saiba Mais</a>
					</div>
					<div>
						<img className="aboutImg" src={aboutLogo}/>
					</div>
				</div>
			*/}

			<Contact/>

			{/* Depoimentos */}
			<div className="testimonialsContainer">
				<div>
					<h2 className="subtitle">Depoimentos</h2>
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
	
			<div className="partnersContainer">
				<div>
					<h1 className="title">Parceiros</h1>
				</div>
           
				<div className="partnersImages">
					<img className="partnerImg" id="UFRRJ" src={UFRRJ} alt=""/>
					<img className="partnerImg" id="Brasil" src={Brasil} alt=""/>
					<img className="partnerImg" id="Rio" src={Rio} alt=""/>
					<img className="partnerImg" id="TOTVS" src={TOTVS} alt=""/>
					<img className="partnerImg" id="Empower" src={Empower} alt=""/>
					<img className="partnerImg" id="Americanas" src={Americanas} alt=""/>
				</div>
			</div>	
			<Footer/>
		</div>
	);
};