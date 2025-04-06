import './App.css'
import { useState, useEffect } from "react";
import Description from "./components/ContactForm/ContactForm"
import Feedback from "./components/SearchBox/SearchBox";
import Options from "./components/Contact/Contact";
import Notification from "./components/ContactList/ContactList";

const App = () => {

  return (
    <>
      <Description />
      <Options/>
    </>
  );
}

export default App