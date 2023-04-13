import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";


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

	console.log(data?.portfolio.date);	
	return (

		<div>
			<p>Data: {data?.portfolio.date}</p>
			<p>Nome do projeto: {data?.portfolio.projectName}</p>
			<p>id: {data?.portfolio.id}</p>
			<p>Link: {data?.portfolio.link}</p>
			<p>Descrição do projeto: {data?.portfolio.projectDescription}</p>
			<p>Tipo de serviço: {data?.portfolio.serviceType}</p>
			<p>Nome do cliente: {data?.portfolio.client.name}</p>
		</div>
	);
};