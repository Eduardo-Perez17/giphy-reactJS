import React from 'react';

const Input = ({ inputType, inputPlaceholder, nameInput, valueInput, eventChange }) => {
	return (
		<input
			type={inputType}
			placeholder={inputPlaceholder}
			name={nameInput}
			value={valueInput}
			onChange={eventChange}
		/>
	);
};

export default Input;
