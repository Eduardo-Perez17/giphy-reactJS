export const getData = (url) => {
	return fetch(url)
		.then((response) => response.json())
		.then((data) => {
			return data;
		})
		.catch((err) => console.log(err));
};

export const returnGetDataAsynchronous = async (url) => {
	const returnDataAsynchronous = await getData(url);
	return returnDataAsynchronous;
};
