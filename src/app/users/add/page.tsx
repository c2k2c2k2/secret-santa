"use client";

import { useState } from "react";

export default function AddUserPage() {
    const [formData, setFormData] = useState({ name: "", email: "", age: "" });
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch(`/api/users`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    age: Number(formData.age),
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage("User added successfully!");
                setFormData({ name: "", email: "", age: "" });
            } else {
                setMessage(data.error || "Failed to add user");
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred");
        }
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div>
                    <label>Age</label>
                    <input
                        type="number"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    />
                </div>
                <button type="submit">Add User</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
