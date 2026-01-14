import UserRow from "./UserRow.js";

export default function UserList({ users, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <UserRow
            key={user.id}
            user={user}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}
