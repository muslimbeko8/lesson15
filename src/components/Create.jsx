import React from "react";
import { useNavigate } from "react-router-dom";

export default function Createe({ setContacts }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;

    setContacts((e) => [
      ...e,
      { id: Date.now(), name, phone },
    ]);

    e.target.reset();
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Add New Contact</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="block w-full p-2 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </div>
  );
}
