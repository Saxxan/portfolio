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

    let isNavDeskopt = props.menuClass === 'isNavDeskopt' ? true : false;
    let isNavMobile = props.menuClass === 'mobileNavMenu' ? true : false;
    
    return (
        <NavMenuOpt>
            {isNavMobile && <NavMenuOptLink style={props.path === location.pathname ? {color: "rgba(0, 102, 255)"} : {color: 'white'}} to={props.path}>{props.name}</NavMenuOptLink>}
            {isNavDeskopt && <NavMenuOptLink style={isNavDeskopt ? {color: theme} : {color: 'white'}} to={props.path}>{props.name}</NavMenuOptLink>}
            {isNavDeskopt && (props.path === location.pathname && <PagePointer />)}
        </NavMenuOpt>
    );
}