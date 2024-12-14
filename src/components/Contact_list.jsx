import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import ContactRow from "./contact_card";

export default function Contact_list({ contacts, setContacts }) {
    const handleDelete = useCallback(
        (id) => {
            setContacts((e) => e.filter((contact) => contact.id !== id));
        },
        [setContacts]
    );

    return (
        <div className="container mx-auto p-4">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-bold">Contacts</h1>
                <Link to="/create">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add Contact
                    </button>
                </Link>
            </header>
            <table className="table-auto w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">name</th>
                        <th className="border px-4 py-2">phone number</th>
                        <th className="border px-4 py-2">Tools</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ContactRow
                            key={contact.id}
                            contact={contact}
                            handleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}
