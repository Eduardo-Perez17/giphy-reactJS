import { useState } from 'react';
import { IMAGES } from '../../utils/Images/Images';

import './_header.scss';

import { MenuNavBar } from '../MenuNavBar';
import { Container } from '../Container';
import { Image } from '../Image';
import { Logo } from '../Logo';

const Header = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const menuToggleHandle = () => setMenuToggle(!menuToggle);

	return (
		<Container containerStyle='header__home'>
			<Logo />
			<Container
				containerStyle='header__home--menu'
				containerEventClick={menuToggleHandle}>
				<Image srcImg={IMAGES.menuApp} altImg={IMAGES.menuApp} />
				{menuToggle && <MenuNavBar menuStyle='header__home--header-mobile' />}
			</Container>
		</Container>
	);
};

export default Header;
