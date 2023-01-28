import React from 'react';

import { ContainerArticleData } from '../ContainerArticleData';
import { DotsLoader } from '../DotsLoader';
import { Container } from '../Container';
import { Image } from '../Image';

const ContainerArticleAllDataGifs = ({ dataGiphyHome }) => {
	return (
		<Container containerStyle='card__data--home'>
			<ContainerArticleData title={`More GIF's`} />
			<Container containerStyle='gif__article--home'>
				{dataGiphyHome ? (
					dataGiphyHome.map((dataHome) => (
						<React.Fragment key={dataHome.id}>
							{dataHome ? (
								<Container containerStyle='gif__article--home-item'>
									<Image srcImg={dataHome.images.original.url} altImg={dataHome.title} />
								</Container>
							) : null}
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
