import React from 'react';

import { Container } from '../Container';
import { Menu } from '../Menu';
import { Button } from '../Button';
import { Logo } from '../Logo';

const MenuNavBar = ({ menuStyle }) => {
	return (
		<Container containerStyle={menuStyle}>
			<Logo />
			<Menu />
			<Container containerStyle='menu-button'>
				<Button buttonType='button'>More category</Button>
				<Button buttonType='button'>Explore</Button>
			</Container>
		</Container>
	);
};

export default MenuNavBar;
