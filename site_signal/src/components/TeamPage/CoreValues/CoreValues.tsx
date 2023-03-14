import React, {useState} from "react";
import "./core-values.css";
import { ValueCard } from "../ValueCard/ValueCard";
import icon from "../../../assets/imgs/icon.png";
import valueIcon from "../../../assets/svg/icon.solutionsIdVisual.svg";
import valueIcon2 from "../../../assets/svg/icon.solutionsConsultoria.svg";
import valueIcon3 from "../../../assets/svg/icon.solutionsIdVisual.svg";
import valueIcon4 from "../../../assets/svg/icon.solutionsConsultoria.svg";
import valueIcon5 from "../../../assets/svg/icon.solutionsIdVisual.svg";
import valueImg1 from "../../../assets/svg/card.valores.protagonismo.svg";
import valueImg2 from "../../../assets/svg/card.valores.querencia.svg";
import valueImg3 from "../../../assets/svg/card.valores.resiliencia.svg";
import valueImg4 from "../../../assets/svg/card.valores.levelUp.svg";
import valueImg5 from "../../../assets/svg/card.valores.conexao.svg";

export const CoreValues = () => {
	const [valueIco, setValueIco] = useState<string>(valueIcon);
	const [valueImg, setValueImg] = useState<string>(valueImg1);
	const [value, setValue] = useState<string>("Protagonismo");
	const [valueText, setValueText] = useState<string>("Entendemos que cada membro de nossa equipe é único e possui habilidades e talentos importantes a serem compartilhados. Por isso, valorizamos o protagonismo de cada um e acreditamos que juntos somos mais fortes.");

	/**
 	* Função responsável por atualizar o conteúdo dos cards versão Mobile.
 	*
 	* @param {string} value
 	* @public
 	*/
	
	function activeValue(value:string) {

		switch(value) {
		case("Protagonismo"):
			setValueIco(valueIcon);
			setValueImg(valueImg1);
			setValue(value);
			setValueText("Entendemos que cada membro de nossa equipe é único e possui habilidades e talentos importantes a serem compartilhados. Por isso, valorizamos o protagonismo de cada um e acreditamos que juntos somos mais fortes.");
			break;

		case("Querência"):
			setValueIco(valueIcon2);
			setValueImg(valueImg2);
			setValue(value);
			setValueText("A dedicação de cada membro é fundamental para garantir a qualidade de nosso trabalho e para que possamos superar desafios e alcançar novos patamares.");
			break;
		
		case("Resiliência"):
			setValueIco(valueIcon3);
			setValueImg(valueImg3);
			setValue(value);
			setValueText("Resiliência é fundamental para que possamos enfrentar e superar desafios de forma eficiente, mantendo sempre o foco em nossos objetivos. Acreditamos que juntos somos capazes de superar qualquer obstáculo.");
			break;

		case("Level Up"):
			setValueIco(valueIcon4);
			setValueImg(valueImg4);
			setValue(value);
			setValueText("O crescimento pessoal e profissional de nossos membros é fundamental para o sucesso da empresa. Por isso, valorizamos a evolução constante de cada um, oferecemos oportunidades para que possam desenvolver novas habilidades e aprender cada vez mais.");
			break;
		
		case("Conexão"):
			setValueIco(valueIcon5);
			setValueImg(valueImg5);
			setValue(value);
			setValueText("A conexão e o trabalho em equipe são elementos chave entre nossos membros e estimulamos a colaboração e o compartilhamento de ideias e importante para a construção de relacionamentos fortes com a garantia de uma comunicação clara e eficiente.");
			break;
		}
	}

	return (
		<div className="coreValuesContainer">
			<h2 className="subtitle">Valores que Guiam a Signal Jr</h2>
			<h1 className="title">Acreditamos que é através destes valores que podemos oferecer soluções de qualidade aos nossos clientes e contribuir para o crescimento e desenvolvimento dos membros que passam por aqui</h1>

			{/*Versão para Desktop */}
			<div className="valueCardsContainer">
				<ValueCard
					valueIcon=""
					valueImg = {valueImg1} 
					valueName = "Protagonismo"
					valueDesc = "Entendemos que cada membro de nossa equipe é único e possui habilidades e talentos importantes a serem compartilhados. Por isso, valorizamos o protagonismo de cada um e acreditamos que juntos somos mais fortes."
				/>
				<ValueCard
					valueIcon=""
					valueImg = {valueImg2}  
					valueName = "Querência"
					valueDesc = "A dedicação de cada membro é fundamental para garantir a qualidade de nosso trabalho e para que possamos superar desafios e alcançar novos patamares."
				/>
				<ValueCard
					valueIcon=""
					valueImg = {valueImg3} 
					valueName = "Resiliência"
					valueDesc = "Resiliência é fundamental para que possamos enfrentar e superar desafios de forma eficiente, mantendo sempre o foco em nossos objetivos. Acreditamos que juntos somos capazes de superar qualquer obstáculo."
				/>
				<ValueCard
					valueIcon="" 
					valueImg = {valueImg4} 
					valueName = "Level Up"
					valueDesc = "O crescimento pessoal e profissional de nossos membros é fundamental para o sucesso da empresa. Por isso, valorizamos a evolução constante de cada um, oferecemos oportunidades para que possam desenvolver novas habilidades e aprender cada vez mais. "
				/>
				<ValueCard
					valueIcon=""
					valueImg = {valueImg5}  
					valueName = "Conexão"
					valueDesc = "A conexão e o trabalho em equipe são elementos chave entre nossos membros e estimulamos a colaboração e o compartilhamento de ideias e importante para a construção de relacionamentos fortes com a garantia de uma comunicação clara e eficiente." 
				/>
			</div>

			{/*Versão para Mobile */}
			<div className="valueCardsContainerMobile">
				<div className="valueCardsSelection">
					<div>
						<button style={{backgroundColor: value == "Protagonismo" ? "#8700A9" : "white"}} onClick={() => activeValue("Protagonismo")}><img src={icon}></img></button>
						<p>Protagonismo</p>
					</div>
					<div>
						<button style={{backgroundColor: value == "Querência" ? "#8700A9" : "white"}} onClick={() => activeValue("Querência")}><img src={icon}></img></button>
						<p>Querência</p>
					</div>
					<div>
						<button style={{backgroundColor: value == "Resiliência" ? "#8700A9" : "white"}} onClick={() => activeValue("Resiliência")}><img src={icon}></img></button>
						<p>Resiliência</p>
					</div>
					<div>
						<button style={{backgroundColor: value == "Level Up" ? "#8700A9" : "white"}} onClick={() => activeValue("Level Up")}><img src={icon}></img></button>
						<p>Level Up</p>
					</div>
					<div>
						<button style={{backgroundColor: value == "Conexão" ? "#8700A9" : "white"}} onClick={() => activeValue("Conexão")}><img src={icon}></img></button>
						<p>Conexão</p>
					</div>
				</div>

				<div>
					<ValueCard 
						valueIcon = {valueIco}
						valueImg = {valueImg}
						valueName = {value}
						valueDesc = {valueText}
					/>
				</div>
			</div>
		</div>
	);
};


