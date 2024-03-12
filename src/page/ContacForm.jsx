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
    <div className="new-recipe-div anotherClass">
      <form className="submit-new-recipe-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            placeholder="Name"
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
          Message:
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div>
          <button className="submit-recipe-btn-form" type="submit">
            Send
          </button>
          <Link to="/">
            <button className="submit-recipe-btn-form" type="submit">
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
