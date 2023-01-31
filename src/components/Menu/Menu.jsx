import React from 'react';
import { Link } from 'react-router-dom';
import { HOME_NAVIGATION } from '../../utils/endPoints/endPoints';

import { Container } from '../Container';

class Menu extends React.Component {
	render() {
		return (
			<Container containerStyle='menu'>
				{HOME_NAVIGATION.map((path) => (
					<React.Fragment key={path.name}>
						<Link to={path.path}>{path.name}</Link>
					</React.Fragment>
				))}
			</Container>
		);
	}
}

export default Menu;
