import React from 'react';
import { TRENDING } from '../../utils/endPoints/endPoints';

import { ContainerArticleData } from '../ContainerArticleData';
import { DotsLoader } from '../DotsLoader';
import { CardGif } from '../CardGif';
import { Container } from '../Container';

const ContainerArticleAllDataGifs = ({ dataGiphyHome }) => {
	return (
		<Container containerStyle='card__data--home'>
			<ContainerArticleData title={`More GIF's`} path={TRENDING.path} />
			<Container containerStyle='gif__article--home'>
				{dataGiphyHome ? (
					dataGiphyHome.map((dataHome) => (
						<React.Fragment key={dataHome.id}>
							<CardGif data={dataHome} />
						</React.Fragment>
					))
				) : (
					<DotsLoader />
				)}
			</Container>
		</Container>
	);
};

export default ContainerArticleAllDataGifs;
