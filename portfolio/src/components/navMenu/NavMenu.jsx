import NavLink from "./navLink/NavLink";
import "./navMenu.css";

export default function NavMenu() {
    const menuOpts = [
        { name: "About me", path: "/"},
        { name: "Design portfolio", path: "/design-projects"},
        { name: "Develop portfolio", path: "/develop-projects"},
        { name: "Contact", path: "/contact"}
    ];

    return (
        <nav className="navMenu">
            {menuOpts.map(opt => <NavLink name={opt.name} path={opt.path}/>)}
        </nav>
    );
}