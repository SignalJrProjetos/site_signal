import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { ParticlesContainer } from "../HomePage/ParticlesContainer";
import { Header } from "../HomePage/Header/Header";
import { Navbar } from "../HomePage/Navbar/Navbar";
import { Footer } from "../HomePage/Footer/Footer";
import quoteIco from "../../assets/svg/icon.quote.svg";
import "./serviceInfo.css";


// Query para pegar informações do projeto
const GET_PROJECT_BY_SLUG_QUERY = gql`
		query GET_PROJECT_BY_SLUG_QUERY($slug: String) {
			portfolio(where: {slug: $slug}) {
				date
				id
				link
				projectDescription
				projectName
				projectTestimony
				projectImage1 {
					url
				}
				projectImage2 {
					url
				}
				projectThumb {
					url
				}
				serviceType
				client {
					avatar {
						url
					}
					clientDescription
					name
					id
					role
				}
			}
		}`;

// Tipagem da objeto que a query irá retornar
interface GetProjectBySlugQuery {
	portfolio: {
		date: string; // data no header
		id: string;
		link: string; // botão versão ao vivo projeto
		projectDescription: string;
		projectName: string; // Informação do header
		projectTestimony: string;  // testemunha cliente
		projectImage1?: { // Imagem opcional do projet
			url: string | undefined;
		}
		projectImage2?: { // Imagem opcional do projeto
			url: string | undefined;
		}
		projectThumb: { // Imagem principal do projeto
			url: string;
		}
		serviceType: string; // Informação do header
		client: {
			avatar: {
				url: string; // imagem cliente
			};
			clientDescription: string;
			name: string;
			id: string;
			role: string;
		}
	}
}

// Criando objeto imagem
interface Image {
	url: string;
}

// Componente galeria
const ProjectImages:React.FC<{images: Image[]}> = ( {images} ) => {

	const [clickedImage, setClickedImage] = useState<string>("");

	// Quando images retornar o array com todas as imagens ele atualiza o images[0], que nesse caso é o projectThumb
	useEffect(() => {
		if (images.length > 0) {
			setClickedImage(images[0].url);
		}
	}, [images]);


	function handleClick (url: string) {
		setClickedImage(url);
	}

	const filteredImages = images.filter((image) => image.url !== clickedImage);

	return (
		<div className="serviceInfoImagesContainer">
			<div className="serviceInfoThumb">
				<img src={clickedImage}></img>
			</div>
			<div className="serviceInfoImagesOptions">
				{filteredImages.map((image, key) => (
					<div  className="serviceInfoImages" key={key}>
						{image.url !== "" ? (
							<img
								src={image.url}
								onClick={() => handleClick(image.url)}
							/>
						) : null}
					</div>
				))}
			</div>
		</div>
	);
};

export const ServiceInfo = () => {

	const { slug } = useParams<{ slug: string }>(); // Parametro passado pela URL

	const { data } = useQuery<GetProjectBySlugQuery>(GET_PROJECT_BY_SLUG_QUERY, {
		variables: {
			slug: slug,
		}
	});

	const { portfolio } = data || {}; // Pegando o objeto porfolio e atribuindo a uma constante 

	const images: Image[] = [ 	// Criando array com objetos do tipo  Image
		{ url: portfolio?.projectThumb.url || "" },
		{ url: portfolio?.projectImage1?.url || ""},
		{ url: portfolio?.projectImage2?.url || "" }
	];

	const serviceHeaderStyle: string[] = ["serviceInfoHeader","serviceInfoHeaderContainer","serviceInfoHeaderP", "serviceInfoHeaderP2", "serviceInfoHeaderDate", "serviceInfoHeaderH1"];

	return (
		<>
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title={portfolio?.projectName}
				text={portfolio?.serviceType}
				date={portfolio?.date}
				style={serviceHeaderStyle}
				showBorder={false}
			/>
			<div className="serviceInfoContainer">
				<div className="projectImagesMobile">
					<ProjectImages images={images}/>
				</div>
				<div className="serviceInfoText">
					<h2 className="subtitle" style={{paddingLeft:"0px"}}>Sobre o cliente</h2>
					<p className="content">{portfolio?.client.clientDescription}</p>
					<h2 className="subtitle" style={{paddingLeft:"0px"}}>Sobre o Projeto</h2>
					<p className="content">{portfolio?.projectDescription}</p>
					<a className="buttonPurple2" id="serviceButtonPurple2" href={portfolio?.link} target="_blank" rel="noopener noreferrer">Versão ao Vivo</a>
				</div>
				<div className="projectImagesDiv">
					<div className="mobileOnly testimonialTitle">
						<h2 className="testimonialTitleDep">Depoimento</h2>
					</div>
					<div className="projectImagesDesktop">
						<ProjectImages images={images}/>
					</div>
					<img className= "quotationMark" style={{"transform": "rotate(0deg)"}} src={quoteIco}/>
					<div className="serviceInfoCard">
						<div className="serviceCardAvatar">
							<img src={portfolio?.client.avatar.url} alt=""/>
						</div>
						<div>
							<h2>{portfolio?.client.name}</h2>
							<h3>{portfolio?.client.role}</h3>
							<p>{portfolio?.projectTestimony}</p>
						</div>
					</div>
					<img className= "quotationMark" style={{"float": "right", "transform": "rotate(180deg)"}} src={quoteIco}/>
				</div>
			</div>
			<Footer/>
		</>
	);
};