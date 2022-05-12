import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import { useLocation } from 'react-router-dom';
import './header.css';

export default function Header() {

    const location = useLocation();

    const isWhite = [
    'design-projects',
    'contact',
    'detailed-design-project'
    ].includes(location.pathname);

    return <header className="header">
        <Logo class={isWhite ? "logo fillBlack" : "logo fillWhite"}></Logo>
        <NavMenu></NavMenu>
        <CTA name="Contact"></CTA>
    </header>
}