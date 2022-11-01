import React from "react";
import "../../assets/styles/global.css";
import "./footer.css";
import Logo from "../../assets/imgs/logo.SignalCompactaBranca.png";
import LocationIcon from "../../assets/svg/icon.location.svg";
import EmailIcon from "../../assets/svg/icon.email.svg";
import FacebookIcon from "../../assets/svg/icon.facebook.svg";
import InstagramIcon from "../../assets/svg/icon.instagram.svg";
import LinkedInIcon from "../../assets/svg/icon.linkedin.svg";
import Border from "../../assets/svg/footer.border.svg";

export const Footer = () => {
	return(
		<>
			<img className="footerBorder" src={Border} />
			<div className="footerContainer">
				<div className="footerInfo">
					<div>
						<img className="footerLogo" src={Logo} />
					</div>

					<div className="footerPages">
						<h1>Mais Informações</h1>
						<ul>
							<li><a href="">Página #1</a></li>
							<li><a href="">Página #2</a></li>
							<li><a href="">Página #3</a></li>
						</ul>
					</div>

					<div className="footerContact">
						<h1>Vamos Conversar</h1>
						<div>
							<img src={LocationIcon} />
							<p>UFRRJ, Km 07, Zona Rural, BR-465, Seropédica - RJ</p>
						</div>
						<div>
							<img src={EmailIcon} />
							<a href="mailto:marketing@signaljr.com.br">marketing@signaljr.com.br</a>
						</div>
						<div className="footerSocialMedia">
							<a href=""><img src={FacebookIcon}/></a>
							<a href=""><img src={InstagramIcon}/></a>
							<a href=""><img src={LinkedInIcon}/></a>
						</div>
					</div>
				</div>
				<div className="copyrightInfo">
					<p><b>©Signal Jr</b> 2022. All Rights Reserved.</p>
				</div>
			</div>
		</>
	);
};