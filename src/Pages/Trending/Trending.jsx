import React from 'react';
import { API_URL } from '../../utils/endPoints/endPoints';

import './_trending.scss';

import { MenuNavBarSide } from '../../components/MenuNavBarSide';
import { ArticleGifsOtherRoutes } from '../../components/ArticleGifsOtherRoutes';

import { Container } from '../../components/Container';

class Trending extends React.Component {
	render() {
		return (
			<Container containerStyle='article__all--gifs'>
				<MenuNavBarSide />
				<ArticleGifsOtherRoutes dataPath={API_URL.trending} />
			</Container>
		);
	}
}

export default Trending;
