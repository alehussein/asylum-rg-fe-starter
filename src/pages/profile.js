import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import Loading from './loading';
import './profile.css';

const Profile = () => {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <Loading />;
  }

  return (
    <article className="profile">
      <div className="container">
        {user?.picture && (
          <img
            src={user.picture}
            alt={user?.name}
            style={{ borderRadius: '100px' }}
          />
        )}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map(
            (objKey, idx) =>
              objKey !== 'picture' && (
                <li key={idx}>
                  <strong>{objKey}</strong>: {user[objKey]}
                </li>
              )
          )}
        </ul>
      </div>
    </article>
  );
};

export default Profile;
