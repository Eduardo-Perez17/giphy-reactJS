import React from 'react';
import { returnGetDataAsynchronous } from '../../utils/fetchingData/fetchingData';

import { Container } from '../Container';
import { CardGif } from '../CardGif';

class ArticleGifsOtherRoutes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			trending: {},
		};
	}

	handleFetchingData = async () => {
		const data = await returnGetDataAsynchronous(this.props.dataPath);
		this.setState({
			trending: (this.state.trending = data),
		});
	};

	componentDidMount() {
		this.handleFetchingData();
	}

	render() {
		return (
			<Container containerStyle='article-gif'>
				{this.state.trending.data?.map((dataGif) => (
					<React.Fragment key={dataGif.id}>
						<CardGif data={dataGif} />
					</React.Fragment>
				))}
			</Container>
		);
	}
}

export default ArticleGifsOtherRoutes;
