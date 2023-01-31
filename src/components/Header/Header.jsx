import { useState } from 'react';
import { IMAGES } from '../../utils/Images/Images';
import { Link } from 'react-router-dom';
import { HOME } from '../../utils/endPoints/endPoints';

import './_header.scss';

import { MenuNavBar } from '../MenuNavBar';
import { Container } from '../Container';
import { Image } from '../Image';
import { Logo } from '../Logo';

const Header = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const menuToggleHandle = () => setMenuToggle(!menuToggle);

	return (
		<>
			<Container containerStyle='header__home'>
				<Link to={HOME.path}>
					<Logo />
				</Link>
				<Container
					containerStyle='header__home--menu'
					containerEventClick={menuToggleHandle}>
					<Image srcImg={IMAGES.menuApp} altImg={IMAGES.menuApp} />
					{menuToggle && <MenuNavBar menuStyle='header__home--header-mobile' />}
				</Container>
				<Container containerStyle='header__home--menu-desktop'>
					<MenuNavBar menuStyle='header__home--header-desktop-item' />
				</Container>
			</Container>
		</>
	);
};

export default Header;
