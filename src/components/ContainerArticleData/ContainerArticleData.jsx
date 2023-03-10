import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { Container } from '../Container';
import { Title } from '../Title';

const ContainerArticleData = ({
	children,
	componentChildren,
	classIcon,
	title,
	path,
}) => {
	return (
		<Container containerStyle='article__data'>
			<Container containerStyle='article__data--header'>
				<Container containerStyle='article__data--title'>
					<Container containerStyle={classIcon}>{children}</Container>
					<Title size='md'>{title}</Title>
				</Container>
				<Container containerStyle='article__data--article'>
					<Link to={path}>All the GIFs</Link>
					<AiOutlineRight />
				</Container>
			</Container>
			{componentChildren}
		</Container>
	);
};

export default ContainerArticleData;
