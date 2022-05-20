import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import './header.css';

export const HeaderThemeContext = createContext();

export default function Header() {

    const location = useLocation();
    const [theme, setTheme] = useState('white');

    useEffect(() => {
        location.pathname.includes('design')||location.pathname.includes('contact') ? setTheme('black') : setTheme('white');
    }, [location.pathname]);

    return (
        <HeaderThemeContext.Provider value={theme}>
            <header className="header">
                <Logo></Logo>
                <NavMenu></NavMenu>
                <CTA name="Contact"></CTA>
            </header>
        </HeaderThemeContext.Provider>
    );
}