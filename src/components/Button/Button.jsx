import React from 'react';

const Button = ({ buttonType, buttonStyle, buttonEventClick, children }) => {
	return (
		<button type={buttonType} className={buttonStyle} onClick={buttonEventClick}>
			{children}
		</button>
	);
};

export default Button;
