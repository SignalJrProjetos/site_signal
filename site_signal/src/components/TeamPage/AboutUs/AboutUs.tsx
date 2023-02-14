import React from "react";
import "./about-us.css";
import LogoSignal from "../../../assets/svg/logo.SignalSymbol.svg";

export const AboutUs = () => {
	return(
		<div className="aboutUsContainer">
			<div className="aboutContent">
				<div className="aboutUsTitleImg">
					<h2 className="subtitle">Sobre Nós</h2> 
					<img src={LogoSignal}/>
				</div>
				<h1 className="title">A Signal Jr.</h1>
				<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod aliquam felis, vel tincidunt turpis congue sed. 
                    Vestibulum vel mauris ligula. Maecenas lobortis aliquet velit nec semper. Ut pharetra sem ex, non malesuada tellus 
                    efficitur sit amet. Vivamus congue elit vel sem lobortis ultricies. Vivamus commodo mattis urna in rutrum. Suspendisse 
                    luctus sem vitae ipsum vehicula feugiat. Maecenas id leo at nisi ultrices pharetra a vitae dui. Aliquam in iaculis nisl. 
                    Integer venenatis rutrum orci, in venenatis nunc. Mauris laoreet aliquam magna, eu hendrerit ipsum facilisis pulvinar. 
                    Aliquam porttitor orci auctor risus auctor, eget lobortis nisi gravida. Sed tortor tortor, faucibus ac mauris et, pulvinar 
                    viverra lorem. In hac habitasse platea dictumst.
				</p>
			</div>
			<div className="aboutUsImg">
				<img src={LogoSignal}/>
			</div>
		</div>
	);	
};