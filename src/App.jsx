import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Contact_list from "./components/Contact_list";
import ContactEdit from "./components/ContactEdit";
import Createe from "./components/Create";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    return JSON.parse(storedContacts);
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Contact_list contacts={contacts} setContacts={setContacts} />
          }
        />
        <Route path="/create" element={<Createe setContacts={setContacts} />} />
        <Route
          path="/edit/:id"
          element={<ContactEdit contacts={contacts} setContacts={setContacts} />}
        />
      </Routes>
    </>
  );
}
