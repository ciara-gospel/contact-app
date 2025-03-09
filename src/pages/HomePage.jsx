import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const { addContact, editContact } = useContext(ContactContext);
  const location = useLocation();
  const navigate = useNavigate();
  const contactToEdit = location.state?.contact || null;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setEmail(contactToEdit.email);
      setEditIndex(contactToEdit.index);
    }
  }, [contactToEdit]);

  const handleSubmit = () => {
    if (!name.trim()) {
      alert("Entrer un nom");
      return;
    }
    if (!/^\d+$/.test(phone)) {
      alert("Entrer un numéro de téléphone valide");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      alert("Entrer un email valide");
      return;
    }

    if (editIndex !== null) {
      editContact(editIndex, { name, phone, email });
    } else {
      addContact({ name, phone, email });
    }

    // Réinitialiser les champs après modification
    setName("");
    setPhone("");
    setEmail("");
    setEditIndex(null);

    useEffect(() => {
        if (contacts.length > 0 && editIndex === null) {
            navigate("/contacts")
        }
    }, [contacts, editIndex, navigate])
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
      />
      
      <Link to="/contacts">
        <button className="act">Explorer la liste</button>
      </Link>
    </div>
  );
}
