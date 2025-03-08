import { useState } from "react";

export default function ContactForm({ name, setName, phone, setPhone, email, setEmail, handleSubmit, editMode }) {
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validatePhone = (value) => {
    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(value)) {
      setPhoneError("Entrez un numéro de téléphone valide !");
    } else {
      setPhoneError("");
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(value)) {
      setEmailError("Wrong email, enter a correct email");
    } else {
      setEmailError("");
    }
  };

  return ( 
    <div>
      <input 
        placeholder="Nom" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      
      <input 
        type="tel" 
        placeholder="Téléphone" 
        value={phone} 
        onChange={(e) => {
          setPhone(e.target.value);
          validatePhone(e.target.value);
        }} 
      />
      {phoneError && <p className="error">{phoneError}</p>} {/* 🔥 Affichage de l'erreur */}

      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => {
          setEmail(e.target.value);
          validateEmail(e.target.value);
        }} 
      />
      {emailError && <p className="error">{emailError}</p>} {/* 🔥 Affichage de l'erreur */}

      <button className="action"
        onClick={handleSubmit} 
        disabled={phoneError !== "" || emailError !== ""}
      >
        {editMode ? "Modifier" : "Ajouter"}
      </button>
    </div>
  );
}
