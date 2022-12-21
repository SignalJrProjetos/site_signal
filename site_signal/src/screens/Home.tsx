import React from "react";
import "../assets/styles/global.css";
import "../screens/css/home.css";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { Solutions } from "../components/Solutions/Solutions";
import { Contact } from "../components/Contact/Contact";
import { Testimonial } from "../components/Testimonial/Testimonial";
import { Footer } from "../components/Footer/Footer";
import  Carousel  from "react-bootstrap/Carousel";
import border from "../assets/svg/header.border.svg";
import headerImg from "../assets/svg/img.home-header.svg";
import facebookIco from "../assets/svg/icon.facebook.svg";
import instagramIco from "../assets/svg/icon.instagram.svg";
import linkedinIco from "../assets/svg/icon.linkedin.svg";
import aboutLogo from "../assets/svg/logo.SignalSymbolBg.svg";
import UFRRJ from "../assets/svg/logo.UFRRJPartners.svg";
import Brasil from "../assets/svg/logo.BrasilJuniorPartners.svg";
import Rio from "../assets/svg/logo.RioJuniorPartners.svg";
import TOTVS from "../assets/svg/logo.TOTVSPartners.svg";
import Americanas from "../assets/svg/logo.AmericanasPartners.svg";
import Empower from "../assets/svg/logo.EmpowerPartners.svg";
import engealiLogo from "../assets/imgs/logo.engeali.png";
import cantoGeralLogo from "../assets/imgs/logo.cantogeral.png";



export const Home = () =>{

	return (
		<div className="App">
			<ParticlesContainer/>
			<Navbar/>

			{/* Header */}
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
						<img id="headerImg" src={headerImg}/>
					</div>
					<div className="headerSocialMediaContainer">
						<p>SIGA-NOS</p>
						<br></br>
						<a style={{"marginLeft": "4px"}} href="https://www.facebook.com/Signal.Jr.ufrrj"><img src={facebookIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href="https://www.instagram.com/signal_jr/"><img src={instagramIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href="https://www.linkedin.com/company/signal-jr/mycompany/"><img src={linkedinIco}/></a>
					</div>
				</div>
			</div>
			<img className="headerBorder" src={border}/>
			<Solutions/>

			{/*Sobre Nós*/}

			
			<div id="aboutContainer">
				<div className="aboutTextContainer">

					<div id="aboutMobileImg">
						<img className="aboutImg" src={aboutLogo}/>
					</div>

					<h2 className="subtitle">Sobre Nós</h2>
					<h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
					<p>
						Somos a Signal Jr, a única Empresa Júnior de Tecnologia da Informação inovadora do Rio de Janeiro.

						Criada no ano de 2015, a Signal Jr. tem o objetivo de trazer a experiência empreendedora dentro da nossa formação acadêmica. 
						Formada por uma equipe multidisciplinar, que valoriza sua diversidade nas perspectivas da EJ e na tomada de decisão, além de 
						dinamizar os processos através de qualificações distintas e diferentes bagagens. Quem faz parte da Signal Jr. carrega consigo 
						5 valores em comum, que nos norteiam enquanto EJ: Protagonismo, Querência, Resiliência, Level Up e Conexão.
					</p>
					<br/>
					<a className="buttonPurple2" href={process.env.PUBLIC_URL + "/developing"}>Saiba Mais</a>
				</div>
				<div id="aboutDesktopImg">
					<img className="aboutImg" src={aboutLogo}/>
				</div>
			</div>
			

			<Contact/>

			{/* Depoimentos */}
			<div className="testimonialsContainer">
				<div>
					<h2 className="subtitle">Depoimentos</h2>
					<h1 className="title">O que nossos clientes falam</h1>
				</div>

				{/* Cada Carousel.Item corresponde a um componente */}
				<Carousel>
					<Carousel.Item>
						<Testimonial
							image = {engealiLogo}
							authorName = "Glória"
							role = "Diretora de Comunicação da Engeali"
							text = "No projeto, o desempenho da equipe foi excepcional, assim como a qualidade do resultado entregue! A equipe envolvida no projeto foi muito receptiva e atenciosa para esclarecer todas as dúvidas. As expectativas quanto aos resultados foram superadas e ficamos muito felizes em realizar esse projeto com a Signal Jr.!"
						/>
					</Carousel.Item>
					<Carousel.Item>
						<Testimonial
							image = {cantoGeralLogo}
							authorName = "Pollyana"
							role = "Dona do Canto Geral"
							text = "Durante todas as fases de execução do nosso site, a equipe da Signal se mostrou muito competente e prestativa. Sempre muito dispostos a atender nossas demandas mais específicas, oferecendo soluções viáveis e o mais práticas possíveis. O serviço prestado é excelente. Recomendamos fortemente."
						/>
					</Carousel.Item>
				</Carousel>
			</div>

			{/* Parceiros*/}
	
			<div className="partnersContainer">
				<div>
					<h1 className="title">Parceiros</h1>
				</div>
           
				<div className="partnersLogo">
					<div>
						<img id="ufrrjMark" src={UFRRJ} alt="https://portal.ufrrj.br/"/>
						<img id="brasilJrMark" src={Brasil} alt="https://brasiljunior.org.br/"/>
						<img id="rioJrMark" src={Rio} alt="https://riojunior.com.br/"/>
						<img id="totvsMark" src={TOTVS} alt="https://www.totvs.com/"/>
					</div>
					<div>
						<img id="empowerMark" src={Empower} alt="https://empower.vision/"/>
						<img id="americanasMark" src={Americanas} alt="https://www.americanas.com.br"/>
					</div>
				</div>
			</div>	
			<Footer/>
		</div>
	);
};