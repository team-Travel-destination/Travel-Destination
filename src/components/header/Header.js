import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <h1>Travel Destination</h1>
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Header;
