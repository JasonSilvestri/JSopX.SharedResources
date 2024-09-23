import React from 'react';

function CInfo1(props) {
	const title = props.title || "c info 1";

	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#ffffff">
		<path d="m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm1,17h-2v-6h-2v-2h2.5c.827,0,1.5.673,1.5,1.5v6.5Zm-1-9.5c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25.561,1.25,1.25-.561,1.25-1.25,1.25Z" fill="#ffffff" strokeWidth="0"/>
	</g>
</svg>
	);
};

export default CInfo1;