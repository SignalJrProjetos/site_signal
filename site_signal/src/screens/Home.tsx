import React from "react";
import { Contato } from "../components/Contato";
import { Solucoes } from "../components/Solucoes";
import styled from "styled-components";

export const Home = () =>{

	const HomeScreen = styled.div`
		display: flex;
	`;
	return (
		<HomeScreen>
			<Solucoes/>
			{/* <Contato/> */}
		</HomeScreen>
	);
};