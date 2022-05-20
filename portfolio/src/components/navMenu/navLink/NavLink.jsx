import { Link, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { HeaderThemeContext } from "../../header/Header";
import "./navLink.css";
import PagePointer from "./pagePointer/PagePointer";

export default function NavLink(props) {

    const location = useLocation();

    let theme = useContext(HeaderThemeContext);

    return (
        <article className="navMenu__opt">
            <Link className="navMenu__opt__link" style={{color: theme}} to={props.path}>{props.name}</Link>
            {props.path === location.pathname && <PagePointer />}
        </article>
    );
}