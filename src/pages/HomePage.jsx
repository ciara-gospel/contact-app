import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const { addContact, editContact } = useContext(ContactContext);
  const location = useLocation();
  const contactToEdit = location.state?.contact || null;

  // États pour stocker les infos du formulaire
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [errors, setErrors] = useState({}); // Gérer les erreurs

  // Effet pour récupérer les infos quand on clique sur Edit
  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setEmail(contactToEdit.email);
      setEditIndex(contactToEdit.index);
    }
  }, [contactToEdit, location.state]);

  const validateForm = () => {
    let newErrors = {};
    
    if (!name.trim()) newErrors.name = "Entrez un nom";
    if (!phone.trim() || !/^\d+$/.test(phone)) newErrors.phone = "Entrez un numéro valide";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) newErrors.email = "Entrez un email valide";
    
    setErrors(newErrors);
    
    return Object.keys(newErrors).length === 0; // True si pas d'erreur
  };

  const handleSubmit = () => {
    if (!validateForm()) return; // Stop si erreurs

    if (name.trim() && phone.trim() && email.trim()) {
      const newContact = {name, phone, email }

      if (editIndex !== null) {
        editContact(editIndex, newContact); // Modifier contact
      } else {
        addContact(newContact); // Ajouter un nouveau contact
      }
  
      // Reset après modification ou ajout
      setName("");
      setPhone("");
      setEmail("");
      setEditIndex(null);
      setErrors({});
    }
  };

  return (
    <div>
      <h1>Gestion des Contacts</h1>
      <ContactForm 
        name={name} setName={setName}
        phone={phone} setPhone={setPhone}
        email={email} setEmail={setEmail}
        handleSubmit={handleSubmit}
        editMode={editIndex !== null}
        errors={errors}
      />
      
      <Link to="/contacts">
        <button className="act">Explorer la liste</button>
      </Link>
    </div>
  );
}
