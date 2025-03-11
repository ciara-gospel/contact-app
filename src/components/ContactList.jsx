import ContactCard from "./ContactCard";

export default function ContactList({ contacts, onEdit }) {
  return (
    <div>
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} index={index} onEdit={onEdit} />
      ))}
    </div>
  );
}