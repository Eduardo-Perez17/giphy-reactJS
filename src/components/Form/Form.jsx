import React from 'react';

const Form = ({ formStyle, formEventSubmit, children }) => {
	return React.createElement(
		'form',
		{ className: formStyle, onSubmit: formEventSubmit },
		children,
	);
};

export default Form;
