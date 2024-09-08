import React from 'react';

function DecisionProcess2(props) {
	const title = props.title || "decision process 2";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" strokeLinecap="butt" strokeLinejoin="miter">
		<rect height="4" width="8" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" x="2" y="2"/>
		<rect height="4" width="8" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" x="2" y="18"/>
		<line fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2" x1="6" x2="6" y1="9" y2="15"/>
		<polyline fill="none" points="13 4 17 4 17 6" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
		<polyline fill="none" points="13 20 17 20 17 18" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
		<polygon fill="none" points="12 12 17 9 22 12 17 15 12 12" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default DecisionProcess2;