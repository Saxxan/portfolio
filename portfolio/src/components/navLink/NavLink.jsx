import "./navLink.css";

export default function NavLink(props) {
    return <article className="navMenu__opt">
        <a className="navMenu__opt__link" href="">{props.opt}</a>
        <svg className="navMenu__opt__index" width="7" height="6" viewBox="0 0 7 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.5" cy="3" r="3" fill="black"/>
        </svg>
    </article>
}