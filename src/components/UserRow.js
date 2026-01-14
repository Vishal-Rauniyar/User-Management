import { Link } from "react-router-dom";

export default function UserRow({ user, onEdit, onDelete }) {
  return (
    <tr>
      <td><Link to={`/user/${user.id}`}>{user.name}</Link></td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
}
