import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index)); // Supprimer le contact à l'index donné
  };

  const editContact = (index, updatedContacts) => {
    setContacts(contacts.map((contact, i) => (i === index ? updatedContacts : contact)));
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, editContact }}>
      {children}
    </ContactContext.Provider>
  );
}

ContactProvider.prototype = {
  children: PropTypes.node.isRequired,
}