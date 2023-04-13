import React from "react";
import "./testimonial.css";
import quoteIco from "../../../assets/svg/icon.quote.svg";

interface TestimonialProps {
	image: string | undefined;
	authorName: string| undefined;
	role: string| undefined;
	text: string| undefined;
}

export const Testimonial:React.FC<TestimonialProps> = ({image, authorName, role, text}) => {
	return(
		<div className="testimonialCard">
			<img className= "quotationMark" style={{"alignSelf": "flex-start"}} src={quoteIco}/>
			<div className="testimonialAvatar">
				<img src={image} />
			</div>

			<div style={{"marginLeft":"24px"}}>
				<h1>{authorName}</h1>
				<p>{role}</p>
				<p>{text}</p>
			</div>
			<img className= "quotationMark" style={{"alignSelf": "flex-end", "transform": "rotate(-180deg)"}} src={quoteIco}/>
		</div>   
	);
};