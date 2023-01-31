import React from 'react';
import { API_URL_DATA_HOME } from '../../utils/endPoints/endPoints';

import '../Trending/_trending.scss';

import { MenuNavBarSide } from '../../components/MenuNavBarSide';
import { ArticleGifsOtherRoutes } from '../../components/ArticleGifsOtherRoutes';
import { Container } from '../../components/Container';

class Music extends React.Component {
	render() {
		return (
			<Container containerStyle='article__all--gifs'>
				<MenuNavBarSide />
				<ArticleGifsOtherRoutes dataPath={API_URL_DATA_HOME.music} />
			</Container>
		);
	}
}

export default Music;
