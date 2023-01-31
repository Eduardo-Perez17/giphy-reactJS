import React from 'react';
import { NAVBAR_HOME_DESKTOP } from '../../utils/endPoints/endPoints';

import './menuHeaderDesktop.scss';

import { Container } from '../Container';
import { Paragraph } from '../Paragraph';

const MenuHeaderDesktop = () => {
	return (
		<Container containerStyle='header__navBar--desktop'>
			{NAVBAR_HOME_DESKTOP.map((navBarItem) => (
				<React.Fragment key={navBarItem}>
					<Paragraph>{navBarItem}</Paragraph>
				</React.Fragment>
			))}
		</Container>
	);
};

export default MenuHeaderDesktop;
