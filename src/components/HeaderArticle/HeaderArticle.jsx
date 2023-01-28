import { IMAGES } from '../../utils/Images/Images';

import './_headerArticle.scss';

import { Container } from '../Container';
import { Button } from '../Button';
import { Input } from '../Input';
import { Image } from '../Image';

const HeaderArticle = () => {
	return (
		<Container containerStyle='header__article'>
			<Input inputType='text' inputPlaceholder='Search all the GIFs' />
			<Button>
				<Image srcImg={IMAGES.lupaApp} altImg={IMAGES.lupaApp} />
			</Button>
		</Container>
	);
};

export default HeaderArticle;
