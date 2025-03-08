import { createContext, useState } from "react";

export const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index)); // Supprimer le contact à l'index donné
  };

  const editContact = (index, contact) => {
    const updatedContacts = [...contacts];
    updatedContacts[index] = contact;
    setContacts(updatedContacts);
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, deleteContact, editContact }}>
      {children}
    </ContactContext.Provider>
  );
}
