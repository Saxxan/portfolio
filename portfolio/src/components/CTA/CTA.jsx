import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    display: none;
    width: fit-content;
    height: fit-content;
    padding: 6px 24px;
    background-color: var(--primary);
    border: none;
    border-radius: 5px;
    color: var(--font-white);
    font-weight: 600;
    &:hover {
        background-color: var(--primary-hover);
    }
    @media (min-width: 900px) {
        display: flex;
    }
`

export default function CTA(props) {
    return (
        <Button>
            <Link className="cta" to="/contact" style={{color:"white", textDecorationLine:"none"}}>{props.name}</Link>
        </Button>
    )
}