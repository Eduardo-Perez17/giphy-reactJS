import React from 'react';

import { Spinner } from '../Spinner';
import { Container } from '../Container';
import { Image } from '../Image';

const CardDataArticleHome = ({ classCard, dataCard, classGif }) => {
	return (
		<Container containerStyle={`${classCard} slider article__data--article-data`}>
			{dataCard ? (
				dataCard.map((card) => (
					<React.Fragment key={card.id}>
						<Image
							srcImg={card.images.original.url}
							altImg={card.title}
							imgStyle={classGif}
						/>
					</React.Fragment>
				))
			) : (
				<Spinner />
			)}
		</Container>
	);
};

export default CardDataArticleHome;
