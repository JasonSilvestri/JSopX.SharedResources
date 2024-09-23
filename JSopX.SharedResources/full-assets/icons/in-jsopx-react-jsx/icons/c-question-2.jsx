import React from 'react';

function CQuestion2(props) {
	const title = props.title || "c question 2";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" strokeLinecap="butt" strokeLinejoin="miter">
		<circle cx="12" cy="12" fill="none" r="10" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
		<circle cx="12" cy="17.25" fill="#ffffff" r="1.25" strokeWidth="0"/>
		<path d="m9.244,8.369c.422-1.608,1.733-2.44,3.201-2.364,1.45.075,2.799.872,2.737,2.722-.089,2.63-2.884,2.273-3.197,4.773h.011" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default CQuestion2;