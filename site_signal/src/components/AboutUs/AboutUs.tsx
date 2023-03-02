import React from "react";
import "./aboutUs.css";
import aboutLogo from "../../assets/svg/logo.SignalSymbolBg.svg";


export const AboutUs = () => {

	return (
		<div className="aboutContainer">
			<div className="aboutTextContainer">

				<div id="aboutMobileImg">
					<img alt="Logo SignalJr" className="aboutImg" src={aboutLogo}/>
				</div>

				<h2 className="subtitle">Somos a Signal Jr</h2>
				<h1 className="title">A única Empresa Júnior de Tecnologia da Informação inovadora do Rio de Janeiro.</h1>
				<p>
					Criada no ano de 2015, a Signal Jr. tem o objetivo de trazer a experiência empreendedora dentro da nossa formação acadêmica. 
					Formada por uma equipe multidisciplinar, que valoriza sua diversidade nas perspectivas da EJ e na tomada de decisão, além de 
					dinamizar os processos através de qualificações distintas e diferentes bagagens. Quem faz parte da Signal Jr. carrega consigo 
					5 valores em comum, que nos norteiam enquanto EJ: Protagonismo, Querência, Resiliência, Level Up e Conexão.
				</p>
				<br/>
				<a className="buttonPurple2" href={process.env.PUBLIC_URL + "/developing"}>Saiba Mais</a>
			</div>
			<div id="aboutDesktopImg">
				<img alt="Logo SignalJr" src={aboutLogo}/>
			</div>
		</div>
	);
};