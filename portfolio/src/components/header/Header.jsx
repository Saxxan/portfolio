import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import BurgerIcon from './burgerIcon/BurgerIcon';
import './header.css';

export const HeaderThemeContext = createContext();

export default function Header() {

    const location = useLocation();
    const [theme, setTheme] = useState('white');

    // Función para mostrar el menú modal en mobile
    // function showModalMenu() {
        
    // }

    useEffect(() => {
        location.pathname.includes('design')||location.pathname.includes('contact') ? setTheme('black') : setTheme('white');
    }, [location.pathname]);

    return (
        <HeaderThemeContext.Provider value={theme}>
            <header className="header">
                <Logo></Logo>
                <NavMenu class="navMenu"></NavMenu>
                <CTA name="Contact"></CTA>
                <BurgerIcon/>
            </header>
        </HeaderThemeContext.Provider>
    );
}