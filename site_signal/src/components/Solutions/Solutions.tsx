import React, {useState} from "react";
import imagemSolucoes from "../../assets/svg/img.solutionsSolucoesTI.svg";
import imagemIdentidadeVisual from "../../assets/svg/img.solutionsIdVisual.svg";
import imagemConsultoria from "../../assets/svg/img.solutionsConsultoria.svg";
import solucoesMobile from "../../assets/svg/icon.solutionsSolucoesTI.svg";
import identidadeVisualMobile from "../../assets/svg/icon.solutionsIdVisual.svg";
import consultoriaMobile from "../../assets/svg/icon.solutionsConsultoria.svg";

import "./solutions.css";

// Botar imagem de fundo

// Criando o componente Contato
export const Solutions = () => {
	// O botão ativado por padrão é o Soluções
	const [services, setServices] = useState<string>("Soluções");
	const [buttonSolucoes, setButtonSolucoes] = useState<boolean>(true);
	const [buttonIdentidade, setButtonIdentidade] = useState<boolean>(false);
	const [buttonconsultoria, setButtonconsultoria] = useState<boolean>(false);

	function activeButton(button: string) {	
		switch (button) {
		case "Soluções":
			setButtonSolucoes(true);
			setButtonIdentidade(false);
			setButtonconsultoria(false);
			setServices("Soluções");
			break;
		case "Identidade":
			setButtonIdentidade(true);
			setButtonSolucoes(false);
			setButtonconsultoria(false);
			setServices("Identidade");
			break;
		case "Consultoria":
			setButtonconsultoria(true);
			setButtonIdentidade(false);
			setButtonSolucoes(false);
			setServices("Consultoria");
			break;
		}
	}

	function changeContent() {
		if(services == "Identidade") {
			return (
				<>
					<img alt="Imagem identidade visual" src={imagemIdentidadeVisual}/>
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Identidade Visual</h1>
						</div>
						<p>De uma cara nova para sua Marca com nosso serviço de identidade Visual, partindo da Criação do logotipo da marca, 
							versões adaptadas e aplicações, desenvolvidos com o que seu negócio quer mostrar ao mundo.
						</p>
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}
    
		if(services == "Consultoria") {
			return (
				<>
					<img alt="Imagem consultoria em TI" src={imagemConsultoria}/>
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Consultoria em TI</h1>
						</div>
						<p>Partindo de uma etapa de levantamento de requisitos, elaboramos e desenvolvemos softwares personalizados 
							para seu negócio evoluir, incluindo aplicações web, desktop e apps.
						</p>
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}

		if(services == "Soluções") {
			return (
				<>
					<img alt="Imagem criação de sites" src={imagemSolucoes}/>
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Desenvolvimento de Site</h1>
						</div>
						<p>Consiga mais clientes através de um website moderno, organizado e intuitivo, todo responsivo, com alto desempenho e 
							otimizado para mecanismos de busca, desenvolvido com as práticas mais modernas de tecnologia.
						</p>
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}
	}
	return (
		<div className="solutionsContainer">
			<h2 className="subtitle">O que nós fazemos</h2>
			<h1 className="title">Nossas soluções para o seu negócio</h1>
			
			{/* Container para responsividade  */}
			<div className="solutionsContainerMobile">

				<div id="solutionsSolucoes" className="solutionsCardMobile">
					<img alt="Imagem mobile criação de sites" src={solucoesMobile}/>
					<img alt="Imagem background criação de sites" src={imagemSolucoes} />
					<div className="solutionsTitleMobile"><h1>Criação de sites</h1></div>
					<p>
						Consiga mais clientes através de um website moderno, organizado e intuitivo, todo responsivo, com alto desempenho e 
						otimizado para mecanismos de busca, desenvolvido com as práticas mais modernas de tecnologia.
					</p>
				</div>

			
				<div id="solutionsIdentidadeMobile" className="solutionsCardMobile">
					<img alt="Imagem mobile identidade visual" src={identidadeVisualMobile}/>
					<img alt="Imagem background criação de sites" src={imagemIdentidadeVisual} />
					<div className="solutionsTitleMobile"><h1>Identidade Visual</h1></div>
					<p >
						De uma cara nova para sua Marca com nosso serviço de identidade Visual, partindo da Criação do logotipo da marca, 
						versões adaptadas e aplicações, desenvolvidos com o que seu negócio quer mostrar ao mundo.
					</p>
				</div>

				<div id="solutionsConsultoriaMobile" className="solutionsCardMobile">
					<img alt="Imagem mobile consultoria em TI" src={consultoriaMobile}/>
					<img alt="Imagem background consultoria em TI" src={imagemConsultoria} />
					<div className="solutionsTitleMobile"><h1>Consultoria</h1></div>
					<p>
						Partindo de uma etapa de levantamento de requisitos, elaboramos e desenvolvemos softwares personalizados para seu negócio 
						evoluir, incluindo aplicações web, desktop e apps.
					</p>
				</div>

			</div>
			{/* Container para Desktop  */}
			<div className="solutionsContainerButtons">
				<button
					style={{backgroundColor: buttonSolucoes ? "#8700A9" : "transparent", border: buttonSolucoes ? "none" : "#610C7D 2px solid", color: buttonSolucoes ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Soluções")}>
					Criação de Sites
				</button>
				<button
					style={{backgroundColor: buttonIdentidade ? "#8700A9" : "transparent", border: buttonIdentidade ? "none" : "#610C7D 2px solid", color: buttonIdentidade ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Identidade")}>
					Identidade Visual
				</button>
				<button
					style={{backgroundColor: buttonconsultoria ? "#8700A9" : "transparent", border: buttonconsultoria ? "none" : "#610C7D 2px solid", color: buttonconsultoria ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Consultoria")}>
					Consultoria em TI
				</button>
			</div>                
			<div className="solutionsChangeContent">
				{changeContent()}
			</div>
		</div>
	);
};