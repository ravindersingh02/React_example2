import { Outlet, Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        <li><NavLink to="/" activeclassname="active">Home</NavLink> </li>           
        <li><NavLink to="/about" activeclassname="active">about</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active">contact us</NavLink></li>
        <li><NavLink to="/product" activeclassname="active">Product page</NavLink></li>
        <li><NavLink to="/search" activeclassname="active">Search Page</NavLink></li>
         
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;