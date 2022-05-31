import React, { useState } from 'react';
import { NavMenuMobile } from '../../../navMenu/NavMenu';
import styled from 'styled-components';

const Modal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100vw;
    height: 100vh;
    background: var(--bg-dark-1);
`
export default function ModalMenu(props) {

	return (
        <Modal>
            <NavMenuMobile />
        </Modal>
	)
}


