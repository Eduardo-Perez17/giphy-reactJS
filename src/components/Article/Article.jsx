import React, { useState, useEffect } from 'react';
import { useDataGifHome } from '../../context/dataGifHome/useDataGifHome';

import './_article.scss';

import { BiTrendingUp } from 'react-icons/bi';
import { FaPaw } from 'react-icons/fa';
import { BsMusicNote } from 'react-icons/bs';

import { ContainerArticleAllDataGifs } from '../ContainerArticleAllDataGifs';
import { CardDataArticleHome } from '../CardDataArticleHome';
import { ContainerArticleData } from '../ContainerArticleData';
import { Container } from '../Container';

const Article = () => {
	const [dataTrending, setDataTrending] = useState([]);
	const [dataGiphyHome, setDataGiphyHome] = useState([]);
	const { trending, animals, music } = useDataGifHome();

	useEffect(() => {
		setDataTrending(trending.data?.slice(0, 10));
		setDataGiphyHome(trending.data?.slice(10, 50));
	}, [trending]);

	return (
		<Container containerStyle='article'>
			<ContainerArticleData
				classIcon='icon-main icon-treding'
				title='Trending'
				componentChildren={<CardDataArticleHome dataCard={dataTrending} />}>
				<BiTrendingUp />
			</ContainerArticleData>

			<ContainerArticleData
				classIcon='icon-main icon-paw'
				title='Animals'
				componentChildren={
					<CardDataArticleHome dataCard={animals?.data} classGif='gif-animals' />
				}>
				<FaPaw />
			</ContainerArticleData>

			<ContainerArticleData
				classIcon='icon-main icon-music'
				title='Music'
				componentChildren={<CardDataArticleHome dataCard={music?.data} />}>
				<BsMusicNote />
			</ContainerArticleData>
			<ContainerArticleAllDataGifs dataGiphyHome={dataGiphyHome} />
		</Container>
	);
};

export default Article;
