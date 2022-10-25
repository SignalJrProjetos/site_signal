import React from "react";
import "../assets/styles/global.css";
import { Navbar } from "../components/Navbar";
import { Contato } from "../components/Contato/Contato";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Testimonial } from "../components/Testimonial";
import  Carousel  from "react-bootstrap/Carousel";
import border from "../assets/svg/border.svg";
import bannerImg from "../assets/svg/img.home-banner.svg";
import facebookIco from "../assets/svg/icon.facebook.svg";
import instagramIco from "../assets/svg/icon.instagram.svg";
import linkedinIco from "../assets/svg/icon.linkedin.svg";
import { Solucoes } from "../components/Solucoes/Solucoes";

export const Home = () =>{
	
	return (
		<div className="App">
			<>
				<ParticlesContainer/>
				<Navbar/>

				{/* Banner */}
				<div style={{"marginLeft": "132px", "width": "640px", "height": "1000px", "borderRadius": "200px", "backgroundColor": "#610C7D", "position": "absolute", "zIndex": "-2"}}/>
				<img style ={{"width": "100%", "position": "absolute", "marginTop": "23%"}} src={border}/>
			
				<div style={{"display": "flex", "alignItems": "center", "marginLeft": "96px"}}>
					<div>
						<h1 style={{"color": "white", "fontFamily": "Scada", "fontSize": "72px", "fontWeight":"bold"}}>
							A solução digital ideal para o seu negócio.
						</h1>
						<p style={{"marginTop": "20px", "color": "white", "fontFamily": "Saira","fontSize": "28px"}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus, urna egestas convallis hendrerit, 
							purus arcu consectetur sapien, eget molestie mi elit sed erat. Curabitur vel ullamcorper odio. Nulla ullamcorper 
							massa sit amet aliquam elementum. Vestibulum faucibus sem sit amet quam lacinia suscipit. 
						</p>
						<br></br>
						<br></br>
						<br></br>
						<a className="botaoTipo1" style={{"fontFamily": "Saira", "fontSize": "28px", "position": "relative"}} href="">Saiba Mais</a>
					</div>
					<div>
						<img style ={{"height": "816px", "position":"relative"}} src={bannerImg}/>
					</div>
					<div style={{"marginRight": "96px", "zIndex": 1}}>
						<p style={{"fontFamily": "Saira", "fontSize": "26px", "fontWeight": "bold", "writingMode":"vertical-rl", "color": "white"}}>SIGA-NOS</p>
						<br></br>
						<a style={{"marginLeft": "4px"}} href=""><img src={facebookIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href=""><img src={instagramIco}/></a>
						<br></br>
						<br></br>
						<a style={{"marginLeft": "2px"}} href=""><img src={linkedinIco}/></a>
					</div>
				</div>

				<Solucoes/>
				<Contato/>
				{/* Depoimentos */}
				<div className="testimonialsContainer" style={{"marginTop":"300px"}}>
					<div style={{"textAlign":"center", "paddingBottom": "24px"}}>
						<h2 style={{"fontFamily":"Saira", "fontSize":"32px"}}>Depoimentos</h2>
						<h1 style={{"fontFamily":"Scada", "fontSize":"48px", "fontWeight":"bold", "color":"#610C7D"}}>O que nossos clientes falam</h1>
					</div>

					{/* Cada Carousel.Item corresponde a um componente */}
					<Carousel>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
						<Carousel.Item>
							<Testimonial/>
						</Carousel.Item>
					</Carousel>
				</div>

			</>
		</div>
	);
};