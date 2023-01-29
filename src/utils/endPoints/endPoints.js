const URL_API = 'https://api.giphy.com/v1/gifs/';
const URL_API_SEARCH = 'https://api.giphy.com/v1/gifs/search';
export const API_KEY = 'yyUvBKVTZGA0dIce80D7QeMhnH4rAE3Q';

export const API_URL = {
	trending: `${URL_API}trending?api_key=${API_KEY}`,
	random: `${URL_API}random?api_key=${API_KEY}`,
	categories: `${URL_API}categories?api_key=${API_KEY}`,
};

export const API_URL_DATA_HOME = {
	animals: `${URL_API_SEARCH}?q=animals&api_key=${API_KEY}&limit=10`,
	music: `${URL_API_SEARCH}?q=music&api_key=${API_KEY}&limit=10`,
};

export const HOME_NAVIGATION = [
	{
		name: 'actions',
		path: `${URL_API_SEARCH}?q=actions&api_key=${API_KEY}`,
	},
	{
		name: 'anime',
		path: `${URL_API_SEARCH}?q=anime&api_key=${API_KEY}`,
	},
	{
		name: 'cartoons',
		path: `${URL_API_SEARCH}?q=cartoons&api_key=${API_KEY}`,
	},
	{
		name: 'emotions',
		path: `${URL_API_SEARCH}?q=emotions&api_key=${API_KEY}`,
	},
	{
		name: 'food',
		path: `${URL_API_SEARCH}?q=food&api_key=${API_KEY}`,
	},
	{
		name: 'gaming',
		path: `${URL_API_SEARCH}?q=gaming&api_key=${API_KEY}`,
	},
	{
		name: 'memes',
		path: `${URL_API_SEARCH}?q=memes&api_key=${API_KEY}`,
	},
	{
		name: 'celebrities',
		path: `${URL_API_SEARCH}?q=celebrities&api_key=${API_KEY}`,
	},
	{
		name: 'sports',
		path: `${URL_API_SEARCH}?q=sports&api_key=${API_KEY}`,
	},
	{
		name: 'amor',
		path: `${URL_API_SEARCH}?q=love&api_key=${API_KEY}`,
	},
	{
		name: 'stephen curry',
		path: `${URL_API_SEARCH}?q=curry&api_key=${API_KEY}`,
	},
];

export const HOME = {
	path: '/',
	name: 'hogar',
};

export const GIF = {
	path: '/gif',
	name: 'gif',
};

export const TRENDING = {
	path: '/trending',
	name: 'trending',
};

export const CATEGORY = {
	path: '/category',
	name: 'categoria',
};

export const NOT_FOUND = {
	path: '*',
	name: 'not found',
};

export const NAVBAR_HOME_DESKTOP = ['category', 'clips', 'more gif'];

/*
ejemplo sin parametros :
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}
*/

/*
ejemplo con parametros :
https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&offset=<number>&limit=<number>
*/
