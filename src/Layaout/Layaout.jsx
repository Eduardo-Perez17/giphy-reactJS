import { Outlet } from 'react-router-dom';
import './layaout.scss';

import { Container } from '../components/Container';

const Layaout = () => {
	return (
		<Container containerStyle='grid-father'>
			<Container containerStyle='grid-son'>
				<Outlet />
			</Container>
		</Container>
	);
};

export default Layaout;
