import NavLink from "../navLink/NavLink";
import "./navMenu.css";

export default function NavMenu() {
    return <nav className="navMenu">
        <NavLink opt="About me"></NavLink>
        <NavLink opt="Design portfolio"></NavLink>
        <NavLink opt="Developer portfolio"></NavLink>
        <NavLink opt="Contact"></NavLink>
    </nav>
}