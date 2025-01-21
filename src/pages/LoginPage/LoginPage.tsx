import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => loginWithRedirect()}>Iniciar sesión</button>
    </div>
  );
};

export default LoginPage;
