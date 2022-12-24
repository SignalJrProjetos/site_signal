import React from "react";
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
		<footer>
			<img className="footerBorder" src={Border} />
			<div className="footerContainer">
				<div className="footerInfo">
					<img className="footerLogo" src={Logo} />
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
							<p>UFRRJ, Seropédica - RJ</p>
						</div>
						<div>
							<img src={EmailIcon} />
							<a href="mailto:marketing@signaljr.com.br">marketing@signaljr.com.br</a>
						</div>
						<div>
							<a href="https://www.facebook.com/Signal.Jr.ufrrj"><img src={FacebookIcon}/></a>
							<a href="https://www.instagram.com/signal_jr/"><img src={InstagramIcon}/></a>
							<a href="https://www.linkedin.com/company/signal-jr/mycompany/"><img src={LinkedInIcon}/></a>
						</div>
					</div>
				</div>
				<div id="copyright">
					<p><b>©Signal Jr</b> 2022. Todos os direitos reservados.</p>
				</div>
			</div>
		</footer>
	);
};