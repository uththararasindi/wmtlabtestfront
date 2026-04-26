import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">Item Manager</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/add-item">Add Item</Link>
      </div>
    </nav>
  );
}

export default Navbar;
