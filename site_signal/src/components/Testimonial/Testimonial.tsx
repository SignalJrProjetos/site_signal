import React from "react";
import "../../assets/styles/global.css";
import "./testimonial.css";
import avatar from "../../assets/imgs/avatar.png";
import quoteIco from "../../assets/svg/icon.quote.svg";

export const Testimonial = () => {
	return(
		<div className="testimonialCard">
			<img className= "quotationMark" style={{"alignSelf": "flex-start"}} src={quoteIco}/>
			<div className="testimonialAvatar">
				<img src={avatar} />
			</div>

			<div style={{"marginLeft":"24px"}}>
				<h1>João Pedro</h1>
				<p>CEO da Sandbox</p>
				<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ante nec magna aliquam porttitor quis nec magna. 
                    Morbi faucibus sit amet velit et faucibus. Proin risus quam, vestibulum fringilla finibus at, fringilla in nulla. Fusce eget molestie erat.
				</p>
			</div>
			<img className= "quotationMark" style={{"alignSelf": "flex-end", "transform": "rotate(-180deg)"}} src={quoteIco}/>
		</div>   
	);
};