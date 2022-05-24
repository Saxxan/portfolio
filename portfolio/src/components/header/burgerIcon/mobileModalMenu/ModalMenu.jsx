import React, { useState } from 'react';
import { NavMenuMobile } from '../../../navMenu/NavMenu';
import styled from 'styled-components';

const Modal = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: var(--bg-dark-1);
`
export default function ModalMenu(props) {

  // const [isVisible, toggleVisibility] = useState(false);

  // function toggleModalState() {
  //   toggleVisibility(!isVisible);
  // }

  return (
    <Modal>
      <NavMenuMobile/>
    </Modal>
  )
}


