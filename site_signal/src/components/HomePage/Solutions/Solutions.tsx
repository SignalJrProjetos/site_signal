import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import imagemSolucoes from "../../../assets/svg/img.solutionsSolucoesTI.svg";
import imagemIdentidadeVisual from "../../../assets/svg/img.solutionsIdVisual.svg";
import imagemConsultoria from "../../../assets/svg/img.solutionsConsultoria.svg";
import solucoesMobile from "../../../assets/svg/icon.solutionsSolucoesTI.svg";
import identidadeVisualMobile from "../../../assets/svg/icon.solutionsIdVisual.svg";
import consultoriaMobile from "../../../assets/svg/icon.solutionsConsultoria.svg";

import "./solutions.css";

// Botar imagem de fundo

// Criando o componente Contato
export const Solutions = () => {
	//Saber qual a rota estamos usando no react-router
	//Dependendo da rota o flexDirection das soluções muda
	const location = useLocation();

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

	function changeContent(isServicesPage: boolean) {
		if(services == "Identidade") {
			return (
				<>
					{isServicesPage ? null : <img alt="Imagem identidade visual" src={imagemIdentidadeVisual}/>}
					<div className={isServicesPage ? "solutionsContainerText services" : "solutionsContainerText"}>
						{isServicesPage ?
							null :
							<div className="solutionsTitle">
								<h1>Identidade Visual</h1>
							</div>
						}
						{isServicesPage ?
							<p className="servicesSolutionText">Transforme a imagem da sua marca com nosso serviço de Identidade Visual
								completo e personalizado. Nosso processo começa com a criação de um logotipo exclusivo, que captura a essência do seu negócio.
								Além disso, oferecemos versões adaptadas e aplicações para diferentes contextos, garantindo que sua marca tenha
								uma presença consistente e impactante em todas as plataformas. Cada detalhe é pensado para comunicar ao mundo os
								valores, a missão e o propósito da sua empresa. Seja através de materiais impressos ou digitais,
								sua marca terá uma identidade visual que se destaca e conecta com o público de maneira única e autêntica.
							</p> :
							<p>De uma cara nova para sua Marca com nosso serviço de identidade Visual, partindo da Criação do logotipo da marca, 
								versões adaptadas e aplicações, desenvolvidos com o que seu negócio quer mostrar ao mundo.
							</p> 
						}
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}
    
		if(services == "Consultoria") {
			return (
				<>
					{isServicesPage ? null : <img alt="Imagem consultoria em TI" src={imagemConsultoria}/>}
					<div className={isServicesPage ? "solutionsContainerText services" : "solutionsContainerText"}>
						{isServicesPage ?
							null :
							<div className="solutionsTitle">
								<h1>Consultoria em TI</h1>
							</div>
						}

						{isServicesPage ?
							<p className="servicesSolutionText">Começando com uma detalhada etapa de levantamento de requisitos,
							criamos e desenvolvemos softwares personalizados para impulsionar o
							crescimento do seu negócio. Nossa equipe especializada trabalha para entregar soluções sob medida,
							que atendem exatamente às suas necessidades. Desenvolvemos desde aplicações web e desktop até aplicativos
							móveis, sempre utilizando as melhores práticas e tecnologias de ponta. Cada projeto é pensado para garantir
							que sua empresa tenha ferramentas eficientes, escaláveis e prontas para apoiar sua evolução no mercado.
							Confie em nosso expertise para transformar suas ideias em soluções tecnológicas inovadoras e de alto impacto para o seu negócio.
							</p> :
							<p>Partindo de uma etapa de levantamento de requisitos, elaboramos e desenvolvemos softwares personalizados 
						para seu negócio evoluir, incluindo aplicações web, desktop e apps.
							</p>
						}
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}

		if(services == "Soluções") {
			return (
				<>
					{isServicesPage ? null : <img alt="Imagem criação de sites" src={imagemSolucoes}/>}
					<div className={isServicesPage ? "solutionsContainerText services" : "solutionsContainerText"}>
						{isServicesPage ?
							null :
							<div className="solutionsTitle">
								<h1>Desenvolvimento de Site</h1>
							</div>
						}

						{isServicesPage ?
							<p className="servicesSolutionText">Atraia mais clientes com um website moderno, organizado e intuitivo,
								totalmente responsivo e projetado para oferecer a melhor experiência ao usuário. Desenvolvemos sites com
								foco em alto desempenho, garantindo rapidez no carregamento e navegação fluida em qualquer dispositivo.
								Além disso, otimizamos para mecanismos de busca (SEO), aumentando a visibilidade da sua marca online.
								Utilizamos as práticas mais avançadas e modernas de tecnologia para garantir que seu site se destaque no
								mercado competitivo, atraindo novos clientes e potencializando os resultados do seu negócio.
								Conecte-se ao seu público com uma presença digital poderosa e eficaz.
							</p> :
							<p>Consiga mais clientes através de um website moderno, organizado e intuitivo, todo responsivo, com alto desempenho e 
								otimizado para mecanismos de busca, desenvolvido com as práticas mais modernas de tecnologia.
							</p>
						}
						<br/>
						{/* Botão a ser ativado posteriormente <button className="buttonPurple2">Saiba mais</button> */}
					</div>
				</>
			);
		}
	}
	return (
		<div className="solutionsContainer">
			<h2 className="subtitle" style={{"textAlign":"center"}}>O que nós fazemos</h2>
			<h1 className="title" style={{"textAlign":"center"}}>Nossas soluções para o seu negócio</h1>
			
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
			<div className={(location.pathname == "/servicos") ? " flex" : "flex flexColumn"} >
				{/* Container para Desktop  */}
				<div className={(location.pathname == "/servicos") ? " solutionsContainerButtons flexColumn" : "solutionsContainerButtons"} >
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
					{changeContent(location.pathname == "/servicos")}
				</div>
			</div>
		</div>
	);
};