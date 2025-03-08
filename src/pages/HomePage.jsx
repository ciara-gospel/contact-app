import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactForm from "../components/ContactForm";

export default function HomePage() {
  const { addContact, editContact } = useContext(ContactContext);
  const location = useLocation();
  const contactToEdit = location.state?.contact || null;

  const [name, setName] = useState(contactToEdit?.name || "");
  const [phone, setPhone] = useState(contactToEdit?.phone || "");
  const [email, setEmail] = useState(contactToEdit?.email || "");
  const [editIndex, setEditIndex] = useState(contactToEdit?.index ?? null);

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
      setEmail(contactToEdit.email);
      setEditIndex(contactToEdit.index);
    }
  }, [contactToEdit]);

  const handleSubmit = () => {
    if (name.trim() && phone.trim() && email.trim()) {
      if (editIndex !== null) {
        editContact(editIndex, { name, phone, email });
      } else {
        addContact({ name, phone, email });
      }
      setName("");
      setPhone("");
      setEmail("");
      setEditIndex(null);
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
      />
      
      {/* 🔥 Bouton Explorer la liste (Remis comme demandé) */}
      <Link to="/contacts">
        <button className="act">Explorer la liste</button>
      </Link>
    </div>
  );
}
