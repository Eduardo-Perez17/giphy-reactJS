import React from 'react';
import { IMAGES } from '../../utils/Images/Images';

import { Container } from '../Container';
import { Image } from '../Image';
import { Title } from '../Title';

const Logo = () => {
	return (
		<Container containerStyle='header__home--header'>
			<Image srcImg={IMAGES.logoApp} altImg={IMAGES.logoApp} />
			<Title>GIPHY</Title>
		</Container>
	);
};

export default Logo;
