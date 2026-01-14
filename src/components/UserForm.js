import { useEffect, useState } from "react";

export default function UserForm({ onSubmit, editingUser, cancelEdit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  useEffect(() => {
    if (editingUser) setForm(editingUser);
  }, [editingUser]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", phone: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />

      <button type="submit">
        {editingUser ? "Update User" : "Add User"}
      </button>

      {editingUser && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
}
