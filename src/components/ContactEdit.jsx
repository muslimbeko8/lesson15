import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ContactEdit({ contacts, setContacts }) {
    const { id } = useParams();
    const navigate = useNavigate();

    const contact = contacts.find((c) => c.id === parseInt(id));

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    });

    useEffect(() => {
        if (contact) {
            setFormData({
                name: contact.name,
                phone: contact.phone,
            });
        }
    }, [contact]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedContacts = contacts.map((c) =>
            c.id === parseInt(id, 10) ? { ...c, ...formData } : c
        );
        setContacts(updatedContacts);
        navigate("/");
    };

    return (
        <div className="flex justify-center items-start mt-12">
            <div className="w-full max-w-3xl p-4">
                <h1 className="text-2xl font-bold mb-4">Edit Contact</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border rounded px-4 py-2 mb-4"
                        placeholder="Name"
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border rounded px-4 py-2 mb-4"
                        placeholder="Phone"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
