import { Link, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { HeaderThemeContext } from "../../header/Header";
import PagePointer from "./pagePointer/PagePointer";
import styled from "styled-components";

const NavMenuOpt = styled.article`
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const NavMenuOptLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`

export default function NavLink(props) {

    const location = useLocation();

    let theme = useContext(HeaderThemeContext);

    let isNavMenu = props.menuClass === 'navMenu' ? true : false;

    return (
        <NavMenuOpt>
            <NavMenuOptLink style={isNavMenu ? {color: theme} : {color: 'white'}} to={props.path}>{props.name}</NavMenuOptLink>
            {isNavMenu && (props.path === location.pathname && <PagePointer />)}
        </NavMenuOpt>
    );
}