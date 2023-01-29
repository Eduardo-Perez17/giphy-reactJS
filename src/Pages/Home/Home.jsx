import { Container } from '../../components/Container';

import { Header } from '../../components/Header';
import { HeaderArticle } from '../../components/HeaderArticle';
import { Article } from '../../components/Article';

const Home = () => {
	return (
		<>
			<Container containerStyle='header__main'>
				<Header />
				<HeaderArticle />
			</Container>
			<Article />
		</>
	);
};

export default Home;
