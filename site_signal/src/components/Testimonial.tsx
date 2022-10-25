import React from "react";
import styled from "styled-components";
import "../assets/styles/global.css";
import avatar from "../assets/imgs/avatar.png";
import quoteIco from "../assets/svg/icon.quote.svg";

export const Testimonial = () => {

	const Container = styled.div`
	margin-top: 5px;
    margin-bottom: 80px;
    margin-left: 10%;
    margin-right: 10%;
    padding: 24px 24px;
    align-items: center;
    display: flex;
    border-radius: 50px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25)
    `;

	return(
		<Container>
			<img style={{"alignSelf": "flex-start"}} src={quoteIco}/>
			<div>
				<img src={avatar} />
			</div>

			<div style={{"marginLeft":"24px"}}>
				<h1 style={{"fontFamily": "Scada", "fontSize": "48px", "fontWeight":"bold", "color": "#424242"}}>João Pedro</h1>
				<p style={{"fontFamily": "Scada", "fontSize": "24px", "color": "#707070"}}>CEO da Sandbox</p>
				<p style={{"fontFamily": "Saira", "fontSize": "28px", "color": "#707070", "fontWeight":"lighter", "marginTop": "16px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ante nec magna aliquam porttitor quis nec magna. 
                    Morbi faucibus sit amet velit et faucibus. Proin risus quam, vestibulum fringilla finibus at, fringilla in nulla. Fusce eget molestie erat.
				</p>
			</div>
			<img style={{"alignSelf": "flex-end", "transform": "rotate(-180deg)"}} src={quoteIco}/>
		</Container>   
	);
};