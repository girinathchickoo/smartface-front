import React from 'react';



const Rank=({users})=>{
	const{name,entries}=users;
	
	return(
		<div className="near-white">
			<p> {name},Your entry count is...</p>
			<h2>{entries}</h2>
		</div>
		);
};


export default Rank;