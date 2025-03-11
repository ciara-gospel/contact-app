import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import HomePage from "./pages/HomePage";
import ContactDetails from "./pages/ContactDetails";

export default function App() {
  return (
    <ContactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactDetails />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
}