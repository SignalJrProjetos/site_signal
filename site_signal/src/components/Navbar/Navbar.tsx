import React, { Fragment } from "react";
import "../../assets/styles/global.css";
import "./navbar.css";
import logo from "../../assets/imgs/logo.SignalExtensaBranca.png";
import logoMobile from "../../assets/imgs/logo.SignalCompactaBranca.png";
import homeIco from "../../assets/svg/icon.home.svg";
import servicesIco from "../../assets/svg/icon.services.svg";
import teamIco from "../../assets/svg/icon.team.svg";
import arrowIco from "../../assets/svg/icon.arrow.svg";
import facebookIco from "../../assets/svg/icon.facebook.svg";
import instagramIco from "../../assets/svg/icon.instagram.svg";
import linkedinIco from "../../assets/svg/icon.linkedin.svg";

export const Navbar = () => {
	return (
		<nav role="navigation" className="navbarContainer">
			<>
				<a href=""><img id="navbarLogo" src={logo}/></a>
			</>
			<div className="navbarMenu" style={{"display": "flex", "alignItems": "center"}}> 
				<a href="">Serviços</a>
				<a href="">Equipe</a>
				<a className="buttonWhite" href="">Contato</a>
			</div>

			<div id="menuToggle">
				<input type="checkbox"/>
				<span/>
				<span/>
				<span/>
				<div id="menu">
					<img id="navLogoMobile" src={logoMobile} />
					<ul>
						<li><a href=""> <img src={homeIco}/> Início <img src={arrowIco}/> </a></li>
						<li><a href=""> <img src={servicesIco}/> Serviços <img src={arrowIco}/> </a></li>
						<li><a href=""> <img src={teamIco}/> Equipe <img src={arrowIco}/></a></li>
					</ul>
					<h3>Vamos Conversar!</h3>
					<div className="socialMedia">
						<a href=""><img src={facebookIco}/></a>
						<a href=""><img src={instagramIco}/></a>
						<a href=""><img src={linkedinIco}/></a>
					</div>
				</div>
			</div>
		</nav>
	);
};