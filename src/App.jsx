import './App.css'
import Contact from "./components/Contact/Contact"
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {

  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </>
  );
}

export default App