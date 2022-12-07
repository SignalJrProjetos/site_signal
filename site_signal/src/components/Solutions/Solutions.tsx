import React, {useState} from "react";
import imagemSolucoes from "../../assets/imgs/manutencao.png";
import imagemIdentidadeVisual from "../../assets/imgs/identidadeVisual.png";
import imagemManutencao from "../../assets/imgs/solucoes.png";
import solucoesMobile from "../../assets/svg/solutionsMobile.svg";
import identidadeVisualMobile from "../../assets/svg/identidadeMobile.svg";
import manutencaoMobile from "../../assets/svg/manutencaoMobile.svg";

import "./solutions.css";

// Botar imagem de fundo

// Criando o componente Contato
export const Solutions = () => {
	// O botão ativado por padrão é o Soluções
	const [services, setServices] = useState<string>("Soluções");
	const [buttonSolucoes, setButtonSolucoes] = useState<boolean>(true);
	const [buttonIdentidade, setButtonIdentidade] = useState<boolean>(false);
	const [buttonManutencao, setButtonManutencao] = useState<boolean>(false);

	function activeButton(button: string) {	
		switch (button) {
		case "Soluções":
			setButtonSolucoes(true);
			setButtonIdentidade(false);
			setButtonManutencao(false);
			setServices("Soluções");
			break;
		case "Identidade":
			setButtonIdentidade(true);
			setButtonSolucoes(false);
			setButtonManutencao(false);
			setServices("Identidade");
			break;
		case "Manutenção":
			setButtonManutencao(true);
			setButtonIdentidade(false);
			setButtonSolucoes(false);
			setServices("Manutenção");
			break;
		}
	}

	function changeContent() {
		if(services == "Identidade") {
			return (
				<>
					<img src={imagemIdentidadeVisual} alt="" />
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Identidade Visual</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						</p>
						<br/>
						<button className="buttonPurple2">Saiba mais</button>
					</div>
				</>
			);
		}
    
		if(services == "Manutenção") {
			return (
				<>
					<img src={imagemManutencao} alt="" />
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Manutenção</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						</p>
						<br/>
						<button className="buttonPurple2">Saiba mais</button>
					</div>
				</>
			);
		}

		if(services == "Soluções") {
			return (
				<>
					<img src={imagemSolucoes} alt="" />
					<div className="solutionsContainerText">
						<div className="solutionsTitle">
							<h1>Soluções em TI</h1>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut erat sed nisi euismod suscipit. Suspendisse diam magna, lobortis ac justo vel, auctor dictum magna.
						</p>
						<br/>
						<button className="buttonPurple2">Saiba mais</button>
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
					<img src={solucoesMobile} alt=""/>
					<div className="solutionsTitleMobile"><h1>Soluções em TI</h1></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt accumsan dui id condimentum. Morbi tempus velit ac erat blandit, et ullamcorper massa consectetur.</p>
				</div>

			
				<div id="solutionsIdentidadeMobile" className="solutionsCardMobile">
					<img src={identidadeVisualMobile} alt=""/>
					<div style={{borderColor: "white"}} className="solutionsTitleMobile"><h1 style={{color: "white"}}>Identidade Visual</h1></div>
					<p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt accumsan dui id condimentum. Morbi tempus velit ac erat blandit, et ullamcorper massa consectetur.</p>
				</div>

				<div id="solutionsManutencaoMobile" className="solutionsCardMobile">
					<img src={manutencaoMobile} alt=""/>
					<div className="solutionsTitleMobile"><h1>Manutenção</h1></div>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt accumsan dui id condimentum. Morbi tempus velit ac erat blandit, et ullamcorper massa consectetur.</p>
				</div>

			</div>
			{/* Container para Desktop  */}
			<div className="solutionsContainerButtons">
				<button
					style={{backgroundColor: buttonSolucoes ? "#8700A9" : "transparent", border: buttonSolucoes ? "none" : "#610C7D 2px solid", color: buttonSolucoes ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Soluções")}>
					Soluções em TI
				</button>
				<button
					style={{backgroundColor: buttonIdentidade ? "#8700A9" : "transparent", border: buttonIdentidade ? "none" : "#610C7D 2px solid", color: buttonIdentidade ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Identidade")}>
					Identidade Visual
				</button>
				<button
					style={{backgroundColor: buttonManutencao ? "#8700A9" : "transparent", border: buttonManutencao ? "none" : "#610C7D 2px solid", color: buttonManutencao ? "white" : "black"}}
					id="solutionsButtonClicked"
					onClick={() => activeButton("Manutenção")}>
					Manutenção
				</button>
			</div>                
			<div className="solutionsChangeContent">
				{changeContent()}
			</div>
		</div>
	);
};