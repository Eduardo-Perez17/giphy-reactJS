import React from 'react';

const Image = ({ srcImg, altImg, imgStyle }) => {
	return <img src={srcImg} alt={altImg} className={imgStyle} />;
};

export default Image;
