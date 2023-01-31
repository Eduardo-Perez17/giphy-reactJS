import React from 'react';
import { MdVerified } from 'react-icons/md';

import './_cardGif.scss';

import { Container } from '../Container';
import { Paragraph } from '../Paragraph';
import { Title } from '../Title';
import { Image } from '../Image';

class CardGif extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Container containerStyle='gif__article--home-item'>
				<Image
					srcImg={this.props.data.images.downsized.url}
					altImg={this.props.data.title}
				/>
				<Title size='md'>{this.props.data.title}</Title>
				<Container containerStyle='user'>
					<Paragraph>{this.props.data.user?.username}</Paragraph>
					{this.props.data.user?.is_verified ? <MdVerified /> : null}
				</Container>
			</Container>
		);
	}
}

export default CardGif;
