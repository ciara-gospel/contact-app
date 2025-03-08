import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

export default function ContactCard({ contact, index }) {
  const { deleteContact } = useContext(ContactContext);
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/", { state: { contact, index } }); // Envoi des infos à HomePage
  };

  return (
    <div className="contact-box">
        <div className="three">
      <p><strong>{contact.name}</strong></p>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
      </div>
      <div className="buttons">
      <button onClick={handleEdit} className="options">Edit</button>
      <button onClick={() => deleteContact(index)} className="opty">Delete</button>
      </div>
    </div>
  );
}
