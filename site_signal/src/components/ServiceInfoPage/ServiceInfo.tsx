import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { ParticlesContainer } from "../HomePage/ParticlesContainer";
import { Header } from "../HomePage/Header/Header";
import { Navbar } from "../HomePage/Navbar/Navbar";
import { Testimonial } from "../HomePage/Testimonial/Testimonial";
import { Footer } from "../HomePage/Footer/Footer";


// Imprimir na tela (separadamente) todos os dados que pegamos 

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

interface GetProjectBySlugQuery {
	portfolio: {
		date: string; // data no header
		id: string;
		link: string; // botão versão ao vivo projeto
		projectDescription: string;
		projectName: string; // Informação do header
		projectTestimony: string;  // testemunha cliente
		projectImage1?: { // Imagem opcional do projet
			url: string;
		}
		projectImage2?: { // Imagem opcional do projeto
			url: string;
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


export const ServiceInfo = () => {

	const { slug } = useParams<{ slug: string }>(); // Parametro passado pela URL

	const { data } = useQuery<GetProjectBySlugQuery>(GET_PROJECT_BY_SLUG_QUERY, {
		variables: {
			slug: slug,
		}
	});

	const { portfolio } = data || {}; // Pegando o objeto porfolio e atribuindo a uma constante 

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
			<Footer/>
		</>
	);
};