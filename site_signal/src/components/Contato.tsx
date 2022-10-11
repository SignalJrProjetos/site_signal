import React, {useState} from "react";
import styled from "styled-components";
import imagemContato from "../assets/imagemContato.png";
// import "./button.css"; Possível ideia de um hover bacana
import emailjs from "@emailjs/browser";

// Estilização dos componentes
const BackGround = styled.div`
    display: flex;
    width: 100%;
    background-image: linear-gradient(#8700A9, #980089);
	justify-content: space-evenly;
 `;

const Form = styled.div`
    display: flex;
    flex-direction: column;
	align-items: center;
    color: white;
`;

const Input = styled.input`
	border-radius: 30px;
	height: 50px;
	width: 520px;
	outline: none;
    border: #610C7D 3px solid;
	padding-left: 15px;
	margin-top: 10px;
	font-family: "Saira";
	::placeholder {
		color: #BABABA;
		font-size: 20px;
	}
	::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}
	-moz-appearance:textfield;
`;

const InputMessage = styled(Input)`
	    height: 90px;
`;

const Button = styled.button`
	background-image: linear-gradient(#8700A9, #980089);
	width: 267.56px;
    height: 88px;
    font-family: "Scada";
	font-size: 20px;
    color: white;
    border-radius: 30px;
    border: white 3px solid;
	margin: 10px 10px;
	transition: all 0.5s;
	:hover {
		background-image: none;
		background-color: white;
		color: black;
	};
`;

// Tipando o objeto messagem que será enviado para o email da signal
interface Message{
		name: string,
		number: string,
		email: string,
		message: string,
}

// Criando o componente Contato
export const Contato = () => {

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
			emailjs.send("service_k6mztxj", "template_bgrfwqa", templateParms , "7uN9BAm-ze4ihfO32")
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
		<BackGround>
			<img style={{"width": 560, "height": 560, "marginTop": 30}} src={imagemContato}/>
			<Form>
				<h1 style={{"fontWeight": "bolder", "fontSize": 40, "fontFamily": "Saira"}}>Contato</h1>
				<p style={{"fontWeight": "lighter", "fontSize": 20, "fontFamily": "Saira"}}>Dúvidas? Propostas? Mande sua mensagem e em breve retornamos.</p>
				<Input value={message?.name} placeholder="Nome" onChange={event => {handleMessage(event,"name");}}/>
				<Input value={message?.number} placeholder="Telefone" type="number" onChange={event => {handleMessage(event,"number");}}/>
				<Input value={message?.email} placeholder="Email" type="text" onChange={event => {handleMessage(event,"email");}}/>
				<InputMessage value={message?.message} placeholder="Mensagem" onChange={event => {handleMessage(event,"message");}}/>
				<Button onClick={sendEmail} style={{"marginTop": 10, "height": "100px","fontFamily": "Scada"}}>Submeter</Button>
				{/* Possível ideia de um hover bacana <div className="m-btn s-pesoduSlice" data-content="Hover Me">Hover Me</div> */}  
			</Form>
		</BackGround>
	);
};