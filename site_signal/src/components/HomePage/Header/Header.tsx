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
	style?: string[];
	isSocialMedia?: boolean;
}



export const Header:React.FC<Props> = ({ title, text, date, style, isSocialMedia }) => {

	return(
		<>
			<div id={style?.[1]} className="hdrContainer">
				<div className="hdrTextContainer">
					<h1 dangerouslySetInnerHTML={{__html: title ? title : ""}}></h1>
					<p id={style?.[2]} dangerouslySetInnerHTML={{__html: text ? text : ""}}></p>
					{date ? <p id={style?.[2]}>Data: {date}</p> : <></>}
				</div>
				{isSocialMedia && <div id={style?.[0]} className="hdrSocialMediaContainer">
					<p>SIGA-NOS</p>
					<a href=""><img src={facebookIco}/></a>
					<br></br>
					<br></br>
					<a href=""><img src={instagramIco}/></a>
					<br></br>
					<br></br>
					<a href=""><img src={linkedinIco}/></a>
				</div>}
			</div>
			<img className="hdrBorder" src={border}/>
		</>

	);

};