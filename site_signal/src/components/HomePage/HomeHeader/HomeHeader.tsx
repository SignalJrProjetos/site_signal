import React from "react";
import "./homeHeader.css";
import border from "../../../assets/svg/header.border.svg";
import headerImg from "../../../assets/svg/img.home-header.svg";
import facebookIco from "../../../assets/svg/icon.facebook.svg";
import instagramIco from "../../../assets/svg/icon.instagram.svg";
import linkedinIco from "../../../assets/svg/icon.linkedin.svg";

export const HomeHeader = () => {
    
	return(
		<>
			<div className="headerContainer">
				<div className="headerTextContainer">
					<div>
						<h1>
							A consultoria em TI ideal para o crescimento do seu negócio
						</h1>
						<p>
							Oferecemos soluções personalizadas para o desenvolvimento digital do negócio. 
						</p>
						<b/>
						<p>
							Como podemos te ajudar?
						</p>
						<div className="headerButton" style={{"marginTop":"5%"}}>
							<a className="buttonWhite" href="#aboutContainer">Saiba Mais</a>
						</div>
					</div>
					<div>
						<img alt="Imagem ilustrativa banner" id="headerImg" src={headerImg}/>
					</div>
					<div className="headerSocialMediaContainer">
						<p>SIGA-NOS</p>
						<br></br>
						<a style={{"marginLeft": "4px"}} href="https://www.facebook.com/Signal.Jr.ufrrj"><img alt="Icone facebook" src={facebookIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href="https://www.instagram.com/signal_jr/"><img alt="Icone instagram" src={instagramIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href="https://www.linkedin.com/company/signal-jr/mycompany/"><img alt="Icone instagram" src={linkedinIco}/></a>
					</div>
				</div>
			</div>
			<img alt="Borda arredondada Cabeçalho" className="headerBorder" src={border}/>
		</>
	);
};