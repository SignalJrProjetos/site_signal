import React, {useState} from "react";
import "../../assets/styles/global.css";
import "./contact.css"; 
import emailjs from "@emailjs/browser";
import imagemContact from "../../assets/svg/img.contact.svg";
import inputUserIco from "../../assets/svg/icon.input.user.svg";

// Tipando o objeto messagem que será enviado para o email da signal
interface Message{
		name: string,
		number: string,
		email: string,
		message: string,
}
		
// Criando o componente Contato
export const Contact = () => {

	// Objeto messagem
	const [message, setMessage] = useState<Message>({
		name: "",
		number: "",
		email: "",
		message: ""
	});

	// Função para ir alterando o objeto messagem cada vez que algo for inserido nos inputs
	function handleMessage(event: any, paramName: string) {
		const value = event.target.value;
		const object = Object.assign({}, message);
		object[paramName as keyof Message] = value;
		setMessage(object);                           
	}

	// Função para enviar o email
	function sendEmail(){
		// Verificação básica para ver se os campos não estão vazios
		if (message?.name == "" || message?.number == "" || message?.email == "" || message?.message == "" ) {
			alert("Por favor preencha todos os campos"); // Futuramente colocar algum elemento na tela ao inves de um alert
		} else {
			const templateParms = {
				name: message?.name,
				number: message?.number,
				email: message?.email,
				message: message?.message
			};
		
			// Passamos 4 parametros no metodo send (service_id, template_id, parametros da mensagem que foi configurada no template, public_key)
			emailjs.send("service_4jw04wx", "template_bgrfwqa", templateParms , "7uN9BAm-ze4ihfO32")
				.then((response) => {
					alert("Email enviado");
					console.log("Email enviado", response.status, response.text);
					// Quando enviado limpamos os valores que estão nos inputs
					setMessage({
						name: "",
						number: "",
						email: "",
						message: ""
					});
				}, (error) => {
					console.log("Error: ", error);
				});
		}
	}
	// Retornando os elementos do componente
	return (
		<div id="contactContainer" className="contactContainer">
			{/* <div className="contactContainer"></div> */}
			<img id="contactImg" src={imagemContact}/>
			<div className="contactForm">
				<h1>Contato</h1>
				<p>Dúvidas? Propostas? Mande sua mensagem e em breve retornamos.</p>
				<input value={message?.name} placeholder="Nome" onChange={event => {handleMessage(event,"name");}}/>
				<input value={message?.number} placeholder="Telefone" type="number" onChange={event => {handleMessage(event,"number");}}/>
				<input value={message?.email} placeholder="Email" type="text" onChange={event => {handleMessage(event,"email");}}/>
				<textarea value={message?.message} placeholder="Mensagem" onChange={event => {handleMessage(event,"message");}}/>
				<br/>
				<br/>
				<button className="buttonWhite" onClick={sendEmail}>Submeter</button> 
			</div>
		</div>
	);
};