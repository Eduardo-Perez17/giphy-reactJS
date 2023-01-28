import { useState, useEffect } from 'react';

import { API_URL, API_URL_DATA_HOME } from '../../utils/endPoints/endPoints';
import { returnGetDataAsynchronous } from '../../utils/fetchingData/fetchingData';

export const useDataGifHome = () => {
	const [trending, setTrending] = useState([]);
	const [animals, setAnimals] = useState([]);
	const [music, setMusic] = useState([]);

	const resolveData = async () => {
		const dataTrending = await returnGetDataAsynchronous(API_URL.trending);
		const dataAnimals = await returnGetDataAsynchronous(API_URL_DATA_HOME.animals);
		const dataMusic = await returnGetDataAsynchronous(API_URL_DATA_HOME.music);

		setMusic(dataMusic);
		setAnimals(dataAnimals);
		setTrending(dataTrending);
	};

	useEffect(() => {
		resolveData();
	}, []);

	return { trending, animals, music };
};
