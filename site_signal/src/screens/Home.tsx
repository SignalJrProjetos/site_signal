import React from "react";
import "../assets/styles/global.css";
import "../screens/css/home.css";
import { ParticlesContainer } from "../components/HomePage/ParticlesContainer";
import { Navbar } from "../components/HomePage/Navbar/Navbar";
import { HomeHeader } from "../components/HomePage/HomeHeader/HomeHeader";
import { Solutions } from "../components/HomePage/Solutions/Solutions";
import { AboutUs } from "../components/HomePage/AboutUs/AboutUs";
import { Contact } from "../components/HomePage/Contact/Contact";
import { Testimonial } from "../components/HomePage/Testimonial/Testimonial";
import { Partners } from "../components/HomePage/Partners/Partners";
import { Footer } from "../components/HomePage/Footer/Footer";
import Carousel  from "react-bootstrap/Carousel";
import engealiLogo from "../assets/imgs/logo.engeali.png";
import cantoGeralLogo from "../assets/imgs/logo.cantogeral.png";
import contactImage from "../assets/svg/img.contact.svg";

export const Home = () =>{

	return (
		<div className="App">
			<ParticlesContainer/>
			<Navbar/>
			<HomeHeader/>
			<Solutions/>
			<AboutUs/>
			<Contact imagem= {contactImage} />

			{/* Depoimentos */}
			<div className="testimonialsContainer">
				<div>
					<h2 className="subtitle" style={{"textAlign":"center"}}>Depoimentos</h2>
					<h1 className="title" style={{"textAlign":"center"}}>O que nossos clientes falam</h1>
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

			<Partners/>
			<Footer/>
		</div>
	);
};