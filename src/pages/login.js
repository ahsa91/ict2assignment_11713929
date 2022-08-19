import Auth from "../components/authentication/auth";
import Dashboard from "../components/authentication/dashBoard";
import { useUserContext } from "../contexts/userContext";
import "../index.css";

function Login() {
  const { user, loading, error } = useUserContext();

  return (
    <div className="Login">
      {error && <p className="error">{error}</p>}
      {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
    </div>
  );
}

export default Login;
