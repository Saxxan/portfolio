import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import { NavMenuDeskopt } from "../navMenu/NavMenu";
import BurgerIcon from './burgerIcon/BurgerIcon';

export const HeaderThemeContext = createContext();

const Header = styled.header`
    width: 90vw;
    padding: 10px;
    margin: 5px 0;
    position: absolute;
    left: calc(50% - 45vw);
    top: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
`


export default function PageHeader() {

    const location = useLocation();
    const [theme, setTheme] = useState('white');

    useEffect(() => {
        location.pathname.includes('design')||location.pathname.includes('contact') ? setTheme('black') : setTheme('white');
    }, [location.pathname]);

    return (
        <HeaderThemeContext.Provider value={theme}>
            <Header>
                <Logo></Logo>
                <NavMenuDeskopt/>
                <CTA name="Contact"></CTA>
                <BurgerIcon/>
            </Header>
        </HeaderThemeContext.Provider>
    );
}