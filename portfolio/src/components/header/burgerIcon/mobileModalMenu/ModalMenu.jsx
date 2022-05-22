import React from 'react';
import { createRef } from 'react';
import NavMenu from '../../../navMenu/NavMenu';
import './modalMenu.css';

export default function ModalMenu() {

  const modal = createRef(null);
  return (
    <dialog ref={modal} className='modalMenu'>
        <NavMenu class="mobileNavMenu"></NavMenu>
    </dialog>
  )
}
