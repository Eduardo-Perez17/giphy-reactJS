import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
	HOME,
	GIF,
	TRENDING,
	MUSIC,
	ANIMALS,
	NOT_FOUND,
} from './utils/endPoints/endPoints';

import { NotFound } from './Pages/NotFound';
import { Trending } from './Pages/Trending';
import { Animals } from './Pages/Animals';
import { Music } from './Pages/Music';
import { Home } from './Pages/Home';
import { Layaout } from './Layaout';
import { Gif } from './Pages/Gif';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={HOME.path} element={<Layaout />}>
					<Route path={HOME.path} element={<Home />} />
					<Route path={GIF.path} element={<Gif />} />
					<Route path={TRENDING.path} element={<Trending />} />
					<Route path={MUSIC.path} element={<Music />} />
					<Route path={ANIMALS.path} element={<Animals />} />
					<Route path={NOT_FOUND.path} element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
