import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { ParticlesContainer } from "../HomePage/ParticlesContainer";
import { Header } from "../HomePage/Header/Header";
import { Navbar } from "../HomePage/Navbar/Navbar";
import { Testimonial } from "../HomePage/Testimonial/Testimonial";
import { Footer } from "../HomePage/Footer/Footer";

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

const ProjectImages:React.FC<{images: Image[]}> = ( {images}) => {

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

	return (
		<div style={{position: "relative"}}>
			{images.map((image, key) => (
				<div key={key}>
					{image.url !== "" ? ( // Verificando se é uma imagem válida, caso não seja a imagem não vai aparecer
						<img
							src={image.url}
							style={{
								width: clickedImage === image.url ? "360px" : "230px",
								height: clickedImage === image.url ? "210px" : "120px"
							}}
							onClick={() => handleClick(image.url)}
						/>
					) : null}
				</div>
			))}
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

	return (
		<>
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title={portfolio?.projectName}
				text={portfolio?.serviceType}
				date={portfolio?.date}
			/>
			<Testimonial
				image={portfolio?.client.avatar.url}
				authorName={portfolio?.client.name}
				role={portfolio?.client.role}
				text={portfolio?.projectTestimony}
			/>

			{/* Galeria de imagem */}
			<ProjectImages images={images}/>
			<Footer/>
		</>
	);
};