import { useContext } from "react";
import { HeaderThemeContext } from "../../../header/Header";

export default function PagePointer () {

    let theme = useContext(HeaderThemeContext);

    return (
        <svg width="7" height="6" viewBox="0 0 7 6" fill={theme} xmlns="http://www.w3.org/2000/svg">
                <circle cx="3.5" cy="3" r="3"/>
        </svg>
    );
}