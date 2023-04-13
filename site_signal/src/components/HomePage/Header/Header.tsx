import React from "react";
import "../../../assets/styles/global.css";
import "./header.css";
import border from "../../../assets/svg/header.border.svg";
import facebookIco from "../../../assets/svg/icon.facebook.svg";
import instagramIco from "../../../assets/svg/icon.instagram.svg";
import linkedinIco from "../../../assets/svg/icon.linkedin.svg";


interface Props{
	title: string | undefined;
	text: string | undefined;
	date?: string;
}



export const Header:React.FC<Props> = ({ title, text, date }) => {

	return(
		<>
			<div className="hdrContainer">
				<div className="hdrTextContainer">
					<h1>{title}</h1>
					<p>{text}</p>
					{date ? <p>Data: {date}</p> : <></>}
				</div>
				<div className="hdrSocialMediaContainer">
					<p>SIGA-NOS</p>
					<a href=""><img src={facebookIco}/></a>
					<br></br>
					<br></br>
					<a href=""><img src={instagramIco}/></a>
					<br></br>
					<br></br>
					<a href=""><img src={linkedinIco}/></a>
				</div>
			</div>
			<img className="hdrBorder" src={border}/>
		</>

	);

};