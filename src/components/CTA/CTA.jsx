import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    display: ${props => props.display};
    width: fit-content;
    height: fit-content;
    padding: 8px 30px;
    background-color: var(--primary);
    border: none;
    border-radius: 10px;
    color: var(--font-white);
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    transition: all .5s ease-in-out;
    &:hover {
        background-color: var(--primary-hover);
    }
    @media (min-width: 900px) {
        display: block;
        font-size: 20px;
    }
`

export default function CTA(props) {
    return (
        <Button display={props.display}>
            <Link className="cta" to="/contact" style={{color:"white", textDecorationLine:"none"}}>{props.name}</Link>
        </Button>
    )
}