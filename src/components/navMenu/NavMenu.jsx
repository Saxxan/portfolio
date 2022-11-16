import NavLink from "./navLink/NavLink";
import menuOpts from "../json/menuOpts.json";
import styled from "styled-components";

const MenuDeskopt = styled.nav`
    display: none;
    gap: 10px;
    font-family: var(--font-text);
    font-weight: 500;
    @media (min-width: 900px) {
        display: flex;
    }
`

const MenuMobile = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 60px;
    font-size: 30px;
    font-family: var(--font-text);
    font-weight: 500;
`

export function NavMenuMobile(props) {
    return (
        <MenuMobile>
            {menuOpts.map(opt => <NavLink menuClass='mobileNavMenu' name={opt.name} path={opt.path}/>)}
        </MenuMobile>
    );
}

export function NavMenuDeskopt(props) {
    return (
        <MenuDeskopt>
            {menuOpts.map(opt => <NavLink menuClass='isNavDeskopt' name={opt.name} path={opt.path}/>)}
        </MenuDeskopt>
    );
}