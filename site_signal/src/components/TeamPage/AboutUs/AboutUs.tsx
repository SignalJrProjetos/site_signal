import React from "react";
import "./about-us.css";
import LogoSignal from "../../../assets/svg/logo.SignalSymbol.svg";

export const AboutUs = () => {
	return(
		<div className="aboutUsContainer">
			<div className="aboutContent">
				<div className="aboutUsTitleImg">
					<h2 className="subtitle">Sobre Nós</h2> 
					<img src={LogoSignal}/>
				</div>
				<h1 className="title">Conheça a Signal Júnior</h1>
				<p>
				Somos uma equipe de estudantes apaixonados pela tecnologia da informação e o impacto que ela causa no mundo atualmente, dedicados a fornecer soluções inovadoras que tornam a gestão de sua empresa mais eficiente e efetiva. Nós acreditamos que a tecnologia pode ser a chave para o sucesso de seu negócio, e estamos comprometidos em oferecer o melhor suporte e assistência possíveis para garantir o sucesso de nossos clientes. Conheça nossa equipe, nossos serviços e veja como podemos ajudá-lo a alcançar seus objetivos empresariais. Juntos, vamos dar o próximo passo!
				</p>
			</div>
			<div className="aboutUsImg">
				<img src={LogoSignal}/>
			</div>
		</div>
	);	
};