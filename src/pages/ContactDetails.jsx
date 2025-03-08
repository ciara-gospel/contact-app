import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

export default function ContactDetails() {
  const { contacts } = useContext(ContactContext);
  const navigate = useNavigate();

  return (
    <div>
      <h1>Liste des Contacts</h1>
      {contacts.length === 0 ? (
        <p className="result">Liste des contacts vide.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} index={index} />
        ))
      )}
      <div className="but">
      <button onClick={() => navigate("/")} className="back">Revenir à l'accueil</button> {/* Nouveau bouton */}
      </div>
    </div>
  );
}
