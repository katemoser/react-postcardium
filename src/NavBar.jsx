import { NavLink } from "react-router-dom";
// import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/postcards"> Postcards </NavLink>
      <NavLink to="/postcards/1"> Sample </NavLink>
      <NavLink to="/postcards/create"> Create! </NavLink>
    </nav>
  );
}

export default NavBar;