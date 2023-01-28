import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_NAVIGATION } from '../../utils/endPoints/endPoints';

import { Button } from '../Button';
import { Container } from '../Container';
import { Logo } from '../Logo';

const MenuNavBar = ({ menuStyle }) => {
	return (
		<Container containerStyle={menuStyle}>
			<Logo />
			<Container containerStyle='menu'>
				{HOME_NAVIGATION.map((path) => (
					<React.Fragment key={path.name}>
						<Link to={path.path}>{path.name}</Link>
					</React.Fragment>
				))}
			</Container>
			<Container containerStyle='menu-button'>
				<Button buttonType='button'>More category</Button>
				<Button buttonType='button'>Explore</Button>
			</Container>
		</Container>
	);
};

export default MenuNavBar;
