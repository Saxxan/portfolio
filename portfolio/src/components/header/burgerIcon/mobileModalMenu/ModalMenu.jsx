// import React, { Children, createContext, useState } from 'react';
// import { NavMenuMobile } from '../../../navMenu/NavMenu';
// import styled from 'styled-components';

// export const ModalMenuContext = createContext();

// const Modal = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 3;
//   width: 100%;
//   height: 100%;
//   background: var(--bg-dark-1);
// `
// export default function ModalMenu(props) {

// 	const [isVisible, toggleVisibility] = useState(false);

// 	function toggleModalState() {
// 		toggleVisibility(!isVisible);
// 		isVisible ? this.style.display = 'block' : this.style.display = 'none';
// 	}

// 	return (
// 		<ModalMenuContext.Provider>
// 			<Modal>
// 				<NavMenuMobile />
// 			</Modal>
// 			{Children}
// 		</ModalMenuContext.Provider>
// 	)
// }


