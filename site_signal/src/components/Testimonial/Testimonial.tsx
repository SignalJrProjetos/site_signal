import React from "react";
import "../../assets/styles/global.css";
import "./testimonial.css";
import quoteIco from "../../assets/svg/icon.quote.svg";

export const Testimonial = (props: { image: string | undefined; authorName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; role: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
	return(
		<div className="testimonialCard">
			<img className= "quotationMark" style={{"alignSelf": "flex-start"}} src={quoteIco}/>
			<div className="testimonialAvatar">
				<img src={props.image} />
			</div>

			<div style={{"marginLeft":"24px"}}>
				<h1>{props.authorName}</h1>
				<p>{props.role}</p>
				<p>{props.text}</p>
			</div>
			<img className= "quotationMark" style={{"alignSelf": "flex-end", "transform": "rotate(-180deg)"}} src={quoteIco}/>
		</div>   
	);
};