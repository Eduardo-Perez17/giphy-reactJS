import React from 'react';
import { API_URL_DATA_HOME } from '../../utils/endPoints/endPoints';

import { Container } from '../../components/Container';

import { MenuNavBarSide } from '../../components/MenuNavBarSide';
import { ArticleGifsOtherRoutes } from '../../components/ArticleGifsOtherRoutes';

class Animals extends React.Component {
	render() {
		return (
			<Container containerStyle='article__all--gifs'>
				<MenuNavBarSide />
				<ArticleGifsOtherRoutes dataPath={API_URL_DATA_HOME.animals} />
			</Container>
		);
	}
}

export default Animals;
