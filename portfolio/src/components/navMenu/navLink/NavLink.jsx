import { Link, useLocation } from "react-router-dom";
import "./navLink.css";
import PagePointer from "./pagePointer/PagePointer";

export default function NavLink(props) {

    const location = useLocation();

    return (
        <article className="navMenu__opt">
            <Link className="navMenu__opt__link" to={props.path}>{props.name}</Link>
            {props.path === location.pathname && <PagePointer/>}
        </article>
    );
}