import { Link } from "react-router-dom";
import { useLogout } from '../../hooks/useLogout'

// styles & images
import "./Navbar.css";
import Igloo from "../../assets/igloo.png";

export default function Navbar() {
  const { logout, isPending } = useLogout()
  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Igloo} alt="igloo logo" />
          <span>The Igloo</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          {!isPending && <button className="btn" onClick={logout}>Logout</button>}
          {isPending && <button className="btn" disabled>Logging out</button>}
        </li>
      </ul>
    </div>
  );
}
