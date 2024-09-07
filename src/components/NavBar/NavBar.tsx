import { FaHome, FaRegUser } from "react-icons/fa";
import { LuFilePlus } from "react-icons/lu";
import { NavLink, NavList, NavWrapper } from "./NavBar.style";

export const Navbar = () => {
  return (
    <NavWrapper>
      <NavList>
        
        <li>
          <NavLink  href="/">
            <FaHome /> Home
          </NavLink>
        </li>
        <li>
          <NavLink href="/new-list">
            <LuFilePlus />
            Nova Lista
          </NavLink>
        </li>

        <li>
          <NavLink href="/profile">
            <FaRegUser />
            Perfil
          </NavLink>
        </li>

      </NavList>
    </NavWrapper>
  );
};
