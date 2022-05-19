import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import './header.css';

export default function Header() {

    const location = useLocation();

    let isWhite = location.pathname.includes('design')||location.pathname.includes('contact') ? true : false;

    return (
        <header className="header">
            <Logo class={isWhite ? "logo fillBlack" : "logo fillWhite"}></Logo>
            <NavMenu></NavMenu>
            <CTA name="Contact"></CTA>
        </header>
    );
}