import { useContext } from 'react';
import { HeaderThemeContext } from '../header/Header';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Logotipo = styled.svg`
    width: 30px;
    height: 30px;
    @media (min-width: 900px) {
        width: 50px;
        height: 50px;
    }
`

export default function Logo(props) {

    let theme = useContext(HeaderThemeContext);

    return (
        <Link to="/">
            <Logotipo className="logo" width="50" height="50" fill={theme} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="42" r="5.95" stroke="black" stroke-width="0.1"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 39.0811C19 42.8979 23.5111 48 33.5948 48C43.2235 48 48 43.2484 48 36.8611C48 32.7716 46.1425 28.4095 38.8641 26.7347L32.1922 25.2158C32.0839 25.1855 31.9748 25.1551 31.8653 25.1246C29.443 24.4508 26.7712 23.7075 26.7712 21.36C26.7712 18.9063 28.8183 17.1926 32.4954 17.1926C36.8296 17.1926 38.3776 18.9818 39.6675 20.4727C40.5889 21.5377 41.3786 22.4505 42.9582 22.4505C44.8536 22.4505 46.5974 21.2821 46.5974 19.2568C46.5974 14.5442 39.1673 11 33.0261 11C26.2784 11 19.0758 13.96 19.0758 21.8274C19.0758 25.6053 20.4026 29.6168 27.6431 31.4863L36.6274 33.7842C39.3569 34.4853 40.0392 36.0432 40.0392 37.4453C40.0392 39.8211 37.7268 42.0411 33.5948 42.0411C28.9582 42.0411 27.3625 39.9409 26.0124 38.164C25.0223 36.8609 24.1643 35.7316 22.3359 35.7316C20.4026 35.7316 19 37.1337 19 39.0811Z"/>
                <path d="M8 36C3.2 36 2 40 2 42C2 46.8 6 48 8 48C12.8 48 14 44 14 42C14 37.2 10 36 8 36Z"/>
            </Logotipo>
        </Link>
    );
}