import React from 'react';

function ChevronRight(props) {
	const title = props.title || "chevron right";

	return (
		<svg height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff">
		<path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" fillRule="evenodd"/>
	</g>
</svg>
	);
};

export default ChevronRight;