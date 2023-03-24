import React from "react";
import { SolutionsAlt } from "../components/SolutionsAlt/SolutionsAlt";
import { Footer } from "../components/Footer/Footer";
import { Contact } from "../components/Contact/Contact";
import contactImgService from "../assets/svg/Img.contact-service.svg";

export const Services = () => {
	return(
		<>
			<SolutionsAlt/>
			<Contact
				imagem={ contactImgService }
				style={{"marginBottom": "-275px"}}
			/>
			<Footer/>
		</>
	);
};