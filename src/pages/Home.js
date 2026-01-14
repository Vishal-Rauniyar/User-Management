import { useEffect, useState } from "react";
import { fetchUsers, createUser, updateUser, deleteUser } from "../api/users";
import UserList from "../components/UserList";
import UserForm from "../components/UserForm";
import Loader from "../components/Loader";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    try {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(user) {
    try {
      const newUser = await createUser(user);
      newUser.id = Date.now(); // fake ID (IMPORTANT)
      setUsers([newUser, ...users]);
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleUpdate(user) {
    try {
      await updateUser(user.id, user);
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
      setEditingUser(null);
    } catch (err) {
      alert(err.message);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Delete this user?")) return;
    try {
      await deleteUser(id);
      setUsers(users.filter((u) => u.id !== id));
    } catch (err) {
      alert(err.message);
    }
  }

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="page">
      <header className="header">
        <h1>User Management</h1>
        <p>Manage users with create, update and delete operations</p>
      </header>

      <div className="card">
        <UserForm
          onSubmit={editingUser ? handleUpdate : handleCreate}
          editingUser={editingUser}
          cancelEdit={() => setEditingUser(null)}
        />
      </div>

      <div className="card">
        <UserList
          users={users}
          onEdit={setEditingUser}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}
