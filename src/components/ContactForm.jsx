export default function ContactForm({ name, setName, phone, setPhone, email, setEmail, handleSubmit, editMode }) {
    return (
      <div>
        <input placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="tel" placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <button onClick={handleSubmit} className="action">{editMode ? "Modifier" : "Ajouter"}</button>
      </div>
    );
  }
