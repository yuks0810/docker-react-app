import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <Header></Header>
      <AddContact></AddContact>
      <ContactList contacts={contacts}></ContactList>
    </div>
  );
}

export default App;
