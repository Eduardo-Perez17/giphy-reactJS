import { Outlet } from 'react-router-dom';
import './layaout.scss';

import { Container } from '../components/Container';
import { Header } from '../components/Header';

const Layaout = () => {
	return (
		<Container containerStyle='grid-father'>
			<Container containerStyle='grid-son'>
				<Header />
				<Outlet />
			</Container>
		</Container>
	);
};

export default Layaout;
