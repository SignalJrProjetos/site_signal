import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

export const Project = () => {

	// const { data } = useQuery
	// Inserir query que está no hygraph
	const { slug } = useParams<{ slug: string }>();

	return (
		<div>
			<h1>Projeto: {slug}</h1>
		</div>
	);
};