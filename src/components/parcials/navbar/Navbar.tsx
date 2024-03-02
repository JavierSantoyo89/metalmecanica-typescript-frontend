import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h2>Navbar</h2>
      <hr></hr>
      <Link to="/">Home</Link> <Link to="/dashboard">Dashboard</Link>{" "}
      <Link to="/login">Login</Link> <Link to="/settings">Settings</Link>
      <hr></hr>
    </div>
  );
}
