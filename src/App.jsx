import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HOME, GIF, NOT_FOUND } from './utils/endPoints/endPoints';

import { NotFound } from './Pages/NotFound';
import { Layaout } from './Layaout';
import { Gif } from './Pages/Gif';
import { Home } from './Pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME.path} element={<Layaout />}>
					<Route path={HOME.path} element={<Home />} />
					<Route path={GIF.path} element={<Gif />} />
					<Route path={NOT_FOUND.path} element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
