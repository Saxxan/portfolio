import CTA from "../CTA/CTA";
import Logo from "../logo/Logo";
import NavMenu from "../navMenu/NavMenu";
import "./header.css";

export default function Header(props) {
    return <header className="header">
        <Logo></Logo>
        <NavMenu></NavMenu>
        <CTA name="Contact"></CTA>
    </header>
}