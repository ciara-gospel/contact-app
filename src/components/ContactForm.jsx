import { useState } from "react";

export default function ContactForm({ name, setName, phone, setPhone, email, setEmail, handleSubmit, editMode }) {
  const [errors, setErrors] = useState({}); // Stockage des erreurs

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Entrez un nom";
    }

    if (!phone.trim()) {
      newErrors.phone = "Entrez un numéro";
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = "Numéro invalide, entrez uniquement des chiffres";
    }

    if (!email.trim()) {
      newErrors.email = "Entrez un email";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      newErrors.email = "Email incorrect, veuillez entrer un email valide";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retourne true si pas d'erreurs
  };

  const handleFormSubmit = () => {
    if (validateForm()) {
      handleSubmit();
      setErrors({}); // Efface les erreurs après soumission réussie
    }
  };

  return (
    <div>
      <input
        placeholder="Nom"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

      <input
        type="tel"
        placeholder="Téléphone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

      <button onClick={handleFormSubmit}>{editMode ? "Modifier" : "Ajouter"}</button>
    </div>
  );
}
