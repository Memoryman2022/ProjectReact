import { useState } from "react";
import { Link } from "react-router-dom";

export const ContacForm = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		// Aquí puedes agregar la lógica para enviar el formulario, por ejemplo, llamar a una API
		console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
	};
	return (
		<>
			<form className="formContact" onSubmit={handleSubmit}>
				<label>
					Nombre:
					<input
						type="text"
						value={name}
						placeholder="name"
						onChange={(e) => setName(e.target.value)}
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						value={email}
						placeholder="E-mail"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</label>
				<label>
					Mensaje:
					<textarea
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</label>
				<button type="submit">Send</button>
				<Link to="/">
					<button type="submit">Back</button>
				</Link>
			</form>
		</>
	);
};
