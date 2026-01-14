import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UserDetail() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(setUser);
  }, [id]);

  if (!user) return <div className="loader">Loading profile...</div>;

  return (
    <div className="profile-page">
      <div className="profile-card">

        <Link to="/" className="back-link">← Back to Users</Link>

        <div className="profile-header">
          <div className="avatar">
            {user.name?.charAt(0)}
          </div>
          <div>
            <h2>{user.name}</h2>
            <p className="username">@{user.username}</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Contact Information</h3>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>

        <div className="profile-section">
          <h3>Address</h3>
          <p>
            {user.address.street}, {user.address.suite}
          </p>
          <p>
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

        <div className="profile-section">
          <h3>Company</h3>
          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catchphrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>

      </div>
    </div>
  );
}
