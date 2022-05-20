import NavLink from "./navLink/NavLink";
import "./navMenu.css";
import menuOpts from "../json/menuOpts.json";

export default function NavMenu(props) {

    return (
        <nav className={props.class}>
            {menuOpts.map(opt => <NavLink menuClass={props.class} name={opt.name} path={opt.path}/>)}
        </nav>
    );
}