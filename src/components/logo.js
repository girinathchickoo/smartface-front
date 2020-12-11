import React from 'react';
import Tilt from 'react-tilt';
import logo from'../logo.png';
import "./logi.css"




const Logo=()=> {
  
   return(
   	<Tilt className="Tilt ma3 pa2 shadow-1" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
 		<div className="Tilt-inner pa3"> <img alt="" src={logo}style={{ height: 100, width: 100 }}/> </div>
	</Tilt>
   
   );
  
}

export default Logo;