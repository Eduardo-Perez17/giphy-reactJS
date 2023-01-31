import { Container } from '../../components/Container';

import { HeaderArticle } from '../../components/HeaderArticle';
import { Article } from '../../components/Article';

const Home = () => {
	return (
		<>
			<Container containerStyle='header__main'>
				<HeaderArticle />
			</Container>
			<Article />
		</>
	);
};

export default Home;
