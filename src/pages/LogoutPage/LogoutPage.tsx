
import { useAuth0 } from '@auth0/auth0-react';

const LogoutPage = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={() => logout({ redirectUri: window.location.origin })}>Cerrar sesión</button>
    </div>
  );
};

export default LogoutPage;
