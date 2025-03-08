export default function SearchBar({ value, onChange }) {
    return (
      <input
        className="search-bar"
        type="text"
        placeholder="Rechercher un contact..."
        value={value}
        onChange={onChange}
      />
    );
  }
  