import { Link } from "react-router-dom";

// styles & images
import "./Navbar.css";
import Igloo from "../../assets/igloo.png";

export default function Navbar() {
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
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
