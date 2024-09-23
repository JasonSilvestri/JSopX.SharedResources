import React from 'react';

function CInfo2(props) {
	const title = props.title || "c info 2";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff" strokeLinecap="butt" strokeLinejoin="miter">
		<circle cx="12" cy="12" fill="none" r="10" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
		<circle cx="12" cy="7.25" fill="#ffffff" r="1.25" strokeWidth="0"/>
		<path d="m12,17v-5.5c0-.276-.224-.5-.5-.5h-1.5" fill="none" stroke="#ffffff" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="2"/>
	</g>
</svg>
	);
};

export default CInfo2;