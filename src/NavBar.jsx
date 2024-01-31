import { NavLink } from "react-router-dom";

/**
 * Nav Bar Component for postcards app
 *
 * props: None
 *
 * State: None
 *
 * Renders: App -> NavBar
 *
 */
function NavBar() {
  return (
    <nav className="NavBar navbar navbar-expand mb-3">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand"> Postcardium </NavLink>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/postcards" className="nav-link">
                Postcards
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/postcards/1" className="nav-link">
                Sample
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/postcards/create" className="nav-link">
                Create!
              </NavLink>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default NavBar;