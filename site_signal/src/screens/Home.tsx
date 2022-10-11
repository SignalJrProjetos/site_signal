import React from "react";
import { Contato } from "../components/Contato";
import styled from "styled-components";

export const Home = () =>{

	const HomeScreen = styled.div`
		display: flex;
	`;
	return (
		<HomeScreen>
			<Contato/>
		</HomeScreen>
	);
};